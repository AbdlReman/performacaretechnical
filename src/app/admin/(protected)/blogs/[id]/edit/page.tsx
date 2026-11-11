import { Suspense } from "react";
import AdminEditBlogClient from "./AdminEditBlogClient";

export const instant = false;

export default function AdminEditBlogPage() {
  return (
    <Suspense fallback={<p className="text-sm text-[#9bb0c3]">Loading post...</p>}>
      <AdminEditBlogClient />
    </Suspense>
  );
}
