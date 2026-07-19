"use client";

import { useState } from "react";
import { Enquiry } from "@prisma/client";

import EnquiriesTable from "./EnquiriesTable";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function EnquiriesClient({
  enquiries,
}: {
  enquiries: Enquiry[];
}) {
  const [selected, setSelected] = useState<Enquiry | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#D4AF37]">
          Enquiries
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage customer enquiries.
        </p>
      </div>

      <EnquiriesTable
        enquiries={enquiries}
        onView={setSelected}
      />

      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-w-2xl border-zinc-800 bg-zinc-900 text-white">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-[#D4AF37]">
                  {selected.name}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <p>{selected.email}</p>
                </div>

                <div>
                  <p className="text-sm text-zinc-400">Phone</p>
                  <p>{selected.phone}</p>
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Event Type
                  </p>
                  <p>{selected.eventType}</p>
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Event Date
                  </p>
                  <p>
                    {selected.eventDate
                      ? new Date(
                          selected.eventDate
                        ).toLocaleDateString()
                      : "-"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Location
                  </p>
                  <p>{selected.location || "-"}</p>
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Budget
                  </p>
                  <p>{selected.budget || "-"}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-2 text-sm text-zinc-400">
                  Message
                </p>

                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                  {selected.message}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}