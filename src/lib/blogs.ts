import { ObjectId, type WithId, type Document } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { slugify, type BlogInput, type BlogPost } from "@/lib/blog-shared";

export type { BlogPost, BlogStatus, BlogInput } from "@/lib/blog-shared";
export { slugify } from "@/lib/blog-shared";

export type BlogCreateInput = BlogInput;

function mapPost(doc: WithId<Document>): BlogPost {
  return {
    id: doc._id.toString(),
    title: String(doc.title || ""),
    slug: String(doc.slug || ""),
    excerpt: String(doc.excerpt || ""),
    content: String(doc.content || ""),
    coverImage: String(doc.coverImage || ""),
    metaTitle: String(doc.metaTitle || ""),
    metaDescription: String(doc.metaDescription || ""),
    status: doc.status === "published" ? "published" : "draft",
    createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : null,
    updatedAt: doc.updatedAt ? new Date(doc.updatedAt).toISOString() : null,
  };
}

export async function listBlogs(options?: { publishedOnly?: boolean }): Promise<BlogPost[]> {
  const db = await getDb();
  const filter = options?.publishedOnly ? { status: "published" } : {};
  const docs = await db.collection("blogs").find(filter).sort({ createdAt: -1 }).limit(200).toArray();
  return docs.map(mapPost);
}

export async function getBlogById(id: string): Promise<BlogPost | null> {
  if (!ObjectId.isValid(id)) return null;
  const db = await getDb();
  const doc = await db.collection("blogs").findOne({ _id: new ObjectId(id) });
  return doc ? mapPost(doc) : null;
}

export async function getBlogBySlug(slug: string, publishedOnly = false): Promise<BlogPost | null> {
  const db = await getDb();
  const filter: Record<string, unknown> = { slug };
  if (publishedOnly) filter.status = "published";
  const doc = await db.collection("blogs").findOne(filter);
  return doc ? mapPost(doc) : null;
}

export async function createBlog(input: BlogCreateInput): Promise<BlogPost> {
  const db = await getDb();
  const now = new Date();
  const baseSlug = slugify(input.slug || input.title) || `post-${Date.now()}`;
  let slug = baseSlug;
  let i = 1;
  while (await db.collection("blogs").findOne({ slug })) {
    slug = `${baseSlug}-${i}`;
    i += 1;
  }

  const doc = {
    title: input.title.trim(),
    slug,
    excerpt: (input.excerpt || "").trim(),
    content: input.content || "",
    coverImage: (input.coverImage || "").trim(),
    metaTitle: (input.metaTitle || input.title).trim(),
    metaDescription: (input.metaDescription || input.excerpt || "").trim(),
    status: input.status === "published" ? "published" : "draft",
    createdAt: now,
    updatedAt: now,
  };

  const result = await db.collection("blogs").insertOne(doc);
  return mapPost({ _id: result.insertedId, ...doc });
}

export async function updateBlog(id: string, input: BlogCreateInput): Promise<BlogPost | null> {
  if (!ObjectId.isValid(id)) return null;
  const db = await getDb();
  const existing = await db.collection("blogs").findOne({ _id: new ObjectId(id) });
  if (!existing) return null;

  let slug = slugify(input.slug || input.title) || String(existing.slug || "");
  const clash = await db.collection("blogs").findOne({ slug, _id: { $ne: new ObjectId(id) } });
  if (clash) slug = `${slug}-${Date.now().toString().slice(-4)}`;

  const update = {
    title: input.title.trim(),
    slug,
    excerpt: (input.excerpt || "").trim(),
    content: input.content || "",
    coverImage: (input.coverImage || "").trim(),
    metaTitle: (input.metaTitle || input.title).trim(),
    metaDescription: (input.metaDescription || input.excerpt || "").trim(),
    status: input.status === "published" ? "published" : "draft",
    updatedAt: new Date(),
  };

  await db.collection("blogs").updateOne({ _id: new ObjectId(id) }, { $set: update });
  return getBlogById(id);
}

export async function deleteBlog(id: string): Promise<boolean> {
  if (!ObjectId.isValid(id)) return false;
  const db = await getDb();
  const result = await db.collection("blogs").deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount === 1;
}
