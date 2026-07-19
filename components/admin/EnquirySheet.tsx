"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Enquiry, EnquiryStatus } from "@prisma/client";
import { toast } from "sonner";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import DeleteDialog from "./DeleteDialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  enquiry: Enquiry | null;
}

export default function EnquirySheet({
  open,
  onOpenChange,
  enquiry,
}: Props) {
  const router = useRouter();

  const [status, setStatus] = useState<EnquiryStatus>("NEW");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!enquiry) return null;
  const currentEnquiry = enquiry;
  
  async function handleSaveStatus() {
    try {
      setLoading(true);

      const response = await fetch(
        `/api/admin/enquiries/${currentEnquiry.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update");
      }

      router.refresh();
      onOpenChange(false);

      toast.success("Status updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    try {
      setLoading(true);

      const response = await fetch(
        `/api/admin/enquiries/${currentEnquiry.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setDeleteOpen(false);
      onOpenChange(false);

      router.refresh();

      toast.success("Enquiry deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete enquiry.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Sheet
        open={open}
        onOpenChange={(isOpen) => {
          if (isOpen) {
            setStatus(currentEnquiry.status);
          }
          onOpenChange(isOpen);
        }}
      >
        <SheetContent className="w-full sm:max-w-xl border-zinc-800 bg-zinc-950 text-white overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-[#D4AF37]">
              {currentEnquiry.name}
            </SheetTitle>
          </SheetHeader>

          <div className="mt-8 space-y-6">
            <Info label="Email" value={currentEnquiry.email} />
            <Info label="Phone" value={currentEnquiry.phone} />
            <Info label="Event Type" value={currentEnquiry.eventType} />

            <Info
              label="Event Date"
              value={
                currentEnquiry.eventDate
                  ? new Date(currentEnquiry.eventDate).toLocaleDateString("en-IN")
                  : "-"
              }
            />

            <Info
              label="Location"
              value={currentEnquiry.location || "-"}
            />

            <Info
              label="Budget"
              value={currentEnquiry.budget || "-"}
            />

            <div>
              <p className="mb-2 text-sm text-zinc-400">
                Message
              </p>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4 whitespace-pre-wrap">
                {currentEnquiry.message}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-zinc-400">
                Status
              </p>

              <Select
                value={status}
                onValueChange={(value) =>
                  setStatus(value as EnquiryStatus)
                }
              >
                <SelectTrigger className="border-zinc-800 bg-zinc-900">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="NEW">NEW</SelectItem>
                  <SelectItem value="CONTACTED">
                    CONTACTED
                  </SelectItem>
                  <SelectItem value="CONFIRMED">
                    CONFIRMED
                  </SelectItem>
                  <SelectItem value="COMPLETED">
                    COMPLETED
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3 pt-6">
              <Button
                className="flex-1 bg-[#D4AF37] text-black hover:bg-[#c69c2d]"
                onClick={handleSaveStatus}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Status"}
              </Button>

              <Button
                variant="destructive"
                className="flex-1"
                onClick={() => setDeleteOpen(true)}
                disabled={loading}
              >
                Delete
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <DeleteDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onConfirm={handleDelete}
        loading={loading}
      />
    </>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="mb-2 text-sm text-zinc-400">
        {label}
      </p>

      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
        {value}
      </div>
    </div>
  );
}