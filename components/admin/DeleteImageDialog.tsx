"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
interface Props {
  id: string;
}

export default function DeleteImageDialog({ id }: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success("Image deleted successfully.");

      setOpen(false);

      router.refresh();
    } catch {
      toast.error("Failed to delete image.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger
            render={
                <Button
                variant="destructive"
                className="w-full"
                />
            }
            >
            Delete
            </DialogTrigger>

      <DialogContent className="bg-zinc-950 border-zinc-800">
        <DialogHeader>
          <DialogTitle>Delete Image?</DialogTitle>

          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="border-0 bg-transparent p-0 pt-4">
                    <DialogClose
            render={<Button variant="outline" />}
            >
            Cancel
            </DialogClose>

          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}