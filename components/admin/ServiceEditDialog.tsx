"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  imageUrl: string;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: Service;
}

export default function ServiceEditDialog({
  open,
  onOpenChange,
  service,
}: Props) {
  const router = useRouter();

  const [title, setTitle] = useState(service.title);
  const [slug, setSlug] = useState(service.slug);
  const [description, setDescription] = useState(service.description);
  const [content, setContent] = useState(service.content);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("description", description);
      formData.append("content", content);

      if (file) {
        formData.append("file", file);
      }

      const res = await fetch(`/api/admin/services/${service.id}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success("Service updated successfully.");

      onOpenChange(false);
      router.refresh();
    } catch {
      toast.error("Failed to update service.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-zinc-800 bg-zinc-950 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Service</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />

          <Input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Slug"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short Description"
            className="min-h-24 w-full rounded-md border border-zinc-700 bg-black p-3 outline-none"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Full Content"
            className="min-h-48 w-full rounded-md border border-zinc-700 bg-black p-3 outline-none"
          />

          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </div>

        <DialogFooter className="mt-6">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            disabled={loading}
            onClick={handleSave}
            className="bg-[#D4AF37] text-black hover:bg-[#c69c2d]"
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}