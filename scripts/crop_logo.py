from PIL import Image, ImageDraw
import math

src = r"public/images/mobile-logo-02-01.jpg"
img = Image.open(src).convert("RGBA")
w, h = img.size
pixels = img.load()

cx, cy = w // 2, h // 2

# Estimate radius from bright ring/text, then extend to include navy outer ring
max_r = 0
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if (r + g + b) > 420 or (b > 160 and r < 140 and g > 100):
            dist = math.hypot(x - cx, y - cy)
            if dist > max_r:
                max_r = dist

# Extend enough to keep full navy ring + text, but not square padding
radius = int(max_r + 48)
print("center", cx, cy, "bright_r", int(max_r), "radius", radius)

side = radius * 2
left = max(0, cx - radius)
top = max(0, cy - radius)
right = min(w, left + side)
bottom = min(h, top + side)
left = max(0, right - side)
top = max(0, bottom - side)

cropped = img.crop((left, top, right, bottom))
side = min(cropped.size)
cropped = cropped.crop((0, 0, side, side))

# Circular mask
mask = Image.new("L", (side, side), 0)
draw = ImageDraw.Draw(mask)
# inset 1px to avoid fringe
draw.ellipse((1, 1, side - 2, side - 2), fill=255)
out = Image.new("RGBA", (side, side), (0, 0, 0, 0))
out.paste(cropped, (0, 0))
out.putalpha(mask)

# Tight crop to opaque content (removes any leftover transparent margin)
bbox = out.getbbox()
if bbox:
    # Keep square centered on circle
    bx0, by0, bx1, by1 = bbox
    bw = bx1 - bx0
    bh = by1 - by0
    s = max(bw, bh)
    bcx = (bx0 + bx1) // 2
    bcy = (by0 + by1) // 2
    l = max(0, bcx - s // 2)
    t = max(0, bcy - s // 2)
    rgt = min(side, l + s)
    btm = min(side, t + s)
    l = max(0, rgt - s)
    t = max(0, btm - s)
    out = out.crop((l, t, rgt, btm))
    # Re-apply perfect circle mask after tight crop
    s2 = out.size[0]
    mask2 = Image.new("L", (s2, s2), 0)
    ImageDraw.Draw(mask2).ellipse((0, 0, s2 - 1, s2 - 1), fill=255)
    rgb = out.convert("RGBA")
    rgb.putalpha(mask2)
    out = rgb

out_path = r"public/images/logo-header.png"
out.save(out_path, "PNG")
print("saved", out_path, out.size)
