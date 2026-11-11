from PIL import Image
import math

src = r"public/images/logo.png"
img = Image.open(src).convert("RGBA")
w, h = img.size
px = img.load()
cx, cy = w / 2, h / 2

# Find outer blue ring radius from bright/blue ring pixels
max_r = 0
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        # blue ring / glow
        if b > 120 and b > r + 30 and b > g:
            dist = math.hypot(x - cx, y - cy)
            if dist > max_r:
                max_r = dist

radius = max_r + 2
print("size", w, h, "radius", radius)

out = img.copy()
opx = out.load()
for y in range(h):
    for x in range(w):
        r, g, b, a = opx[x, y]
        dist = math.hypot(x - cx, y - cy)
        # Outside the logo circle: make transparent
        if dist > radius:
            opx[x, y] = (0, 0, 0, 0)
            continue
        # Near-black background inside circle stays as design;
        # only clear near-black that is clearly outside ring already handled.
        # Soft edge
        if dist > radius - 1.5:
            fade = max(0, min(255, int(255 * (radius - dist) / 1.5)))
            opx[x, y] = (r, g, b, fade)

out.save(src, "PNG")
print("updated", src)
