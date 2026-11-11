import { Suspense } from "react";
import BlogIndexClient from "./BlogIndexClient";

export const instant = false;

export default function BlogIndexPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background p-8 text-muted">Loading...</div>}>
      <BlogIndexClient />
    </Suspense>
  );
}
