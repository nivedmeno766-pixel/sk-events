"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GalleryUpload() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!file) {
      toast.error("Please choose an image.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("file", file);

      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Upload failed.");
        return;
      }

      toast.success("Image uploaded successfully!");

      setTitle("");
      setFile(null);
      setPreview("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg space-y-5">
      <h2 className="text-2xl font-bold text-[#D4AF37]">
        Upload Gallery Image
      </h2>

      <Input
        placeholder="Image Title (Optional)"
        value={title}
        maxLength={100}
        disabled={loading}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        disabled={loading}
        onChange={(e) => {
          const selected = e.target.files?.[0];

          if (!selected) return;

          setFile(selected);
          setPreview(URL.createObjectURL(selected));
        }}
      />

      {file && (
        <div className="rounded-lg border border-zinc-700 bg-black p-3">
          <p className="text-sm text-zinc-400 mb-2">
            Selected Image
          </p>

          <p className="text-sm text-white break-all">
            {file.name}
          </p>
        </div>
      )}

      {preview && (
        <div className="overflow-hidden rounded-xl border border-zinc-700">
          <Image
            src={preview}
            alt="Preview"
            width={800}
            height={500}
            className="h-64 w-full object-cover"
            unoptimized
          />
        </div>
      )}

      <Button
        onClick={handleUpload}
        disabled={loading}
        className="w-full bg-[#D4AF37] text-black hover:bg-[#c69c2d]"
      >
        <Upload className="mr-2 h-4 w-4" />

        {loading ? "Uploading image..." : "Upload Image"}
      </Button>
    </div>
  );
}