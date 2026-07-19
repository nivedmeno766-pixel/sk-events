"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  loading?: boolean;

  title?: string;
  description?: string;
}

export default function DeleteDialog({
  open,
  onOpenChange,
  onConfirm,
  loading = false,
  title = "Delete Item",
  description = "Are you sure you want to delete this item?",
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border border-zinc-800 bg-zinc-950 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl text-red-500">
            {title}
          </DialogTitle>

          <DialogDescription className="text-zinc-400">
            {description}

            <br />
            <br />

            <span className="font-medium text-red-400">
              This action cannot be undone.
            </span>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-3 pt-4">
          <Button
            variant="outline"
            className="border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}