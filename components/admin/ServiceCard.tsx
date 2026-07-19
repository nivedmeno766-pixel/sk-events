"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import DeleteDialog from "./DeleteDialog";
import ServiceEditDialog from "./ServiceEditDialog";

interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  imageUrl: string;
}

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const router = useRouter();

  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    try {
      setLoading(true);

      const res = await fetch(`/api/admin/services/${service.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success("Service deleted successfully.");

      setOpenDelete(false);

      router.refresh();
    } catch {
      toast.error("Failed to delete service.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <DeleteDialog
        open={openDelete}
        onOpenChange={setOpenDelete}
        onConfirm={handleDelete}
        loading={loading}
        title="Delete Service"
        description={`Are you sure you want to delete "${service.title}"?`}
      />

      <ServiceEditDialog
        open={openEdit}
        onOpenChange={setOpenEdit}
        service={service}
      />

      <div className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-4 p-5">
          <div>
            <h2 className="text-xl font-bold text-[#D4AF37]">
              {service.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {service.description}
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
              onClick={() => setOpenEdit(true)}
            >
              ✏️ Edit
            </Button>

            <Button
              variant="destructive"
              className="flex-1"
              onClick={() => setOpenDelete(true)}
            >
              🗑 Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}