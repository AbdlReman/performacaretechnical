"use client";

import { Editor } from "@tinymce/tinymce-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function TinyMceEditor({ value, onChange }: Props) {
  const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY || "";

  return (
    <Editor
      apiKey={apiKey}
      value={value}
      onEditorChange={(content) => onChange(content)}
      init={{
        height: 420,
        menubar: true,
        skin: "oxide-dark",
        content_css: "dark",
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image | removeformat | code",
        images_upload_handler: async (blobInfo: { blob: () => Blob; filename: () => string }) => {
          const form = new FormData();
          form.append("file", blobInfo.blob(), blobInfo.filename());
          const res = await fetch("/api/admin/upload", { method: "POST", body: form });
          const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
          if (!res.ok || !data.url) {
            throw new Error(data.error || "Image upload failed");
          }
          return data.url;
        },
        automatic_uploads: true,
        convert_urls: false,
      }}
    />
  );
}
