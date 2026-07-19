"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ServiceUpload() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
const [slug, setSlug] = useState("");
const [content, setContent] = useState("");
  async function handleSubmit() {
    if (!title || !slug || !description || !content || !file) {
  toast.error("Please fill in all fields.");
  return;
}

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("title", title);
        formData.append("slug", slug);
        formData.append("description", description);
        formData.append("content", content);
      formData.append("file", file);

      const res = await fetch("/api/admin/services", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      toast.success("Service added successfully!");

      setTitle("");
      setDescription("");
      setFile(null);
      setSlug("");
    setContent("");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add service.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 space-y-4">
      <Input
        placeholder="Service Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

        <Input
        placeholder="Slug (e.g. wedding-events)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        />

      <textarea
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="min-h-32 w-full rounded-md border border-zinc-700 bg-black p-3 text-white outline-none"
      />
    
        <textarea
        placeholder="Full service content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-48 w-full rounded-md border border-zinc-700 bg-black p-3 text-white outline-none"
        />
      <Input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.length) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-[#D4AF37] text-black hover:bg-[#c69c2d]"
      >
        {loading ? "Adding..." : "Add Service"}
      </Button>
    </div>
  );
}

