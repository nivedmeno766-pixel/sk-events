"use client";

import { useMemo, useState } from "react";
import { Enquiry } from "@prisma/client";

import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import SearchBar from "./SearchBar";
import EnquiriesTable from "./EnquiriesTable";
import EnquirySheet from "./EnquirySheet";

interface Props {
  enquiries: Enquiry[];
}

export default function Dashboard({ enquiries }: Props) {
  const [search, setSearch] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] =
    useState<Enquiry | null>(null);

  const filteredEnquiries = useMemo(() => {
    const query = search.toLowerCase();

    return enquiries.filter((enquiry) => {
      return (
        enquiry.name.toLowerCase().includes(query) ||
        enquiry.email.toLowerCase().includes(query) ||
        enquiry.phone.toLowerCase().includes(query) ||
        enquiry.eventType.toLowerCase().includes(query)
      );
    });
  }, [search, enquiries]);

  const stats = {
    total: enquiries.length,
    new: enquiries.filter((e) => e.status === "NEW").length,
    contacted: enquiries.filter((e) => e.status === "CONTACTED").length,
    confirmed: enquiries.filter((e) => e.status === "CONFIRMED").length,
    completed: enquiries.filter((e) => e.status === "COMPLETED").length,
  };

  function handleView(enquiry: Enquiry) {
    setSelectedEnquiry(enquiry);
    setSheetOpen(true);
  }

  return (
    <>
      <div className="space-y-6">
        <DashboardHeader />

        <StatsCards stats={stats} />

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <EnquiriesTable
          enquiries={filteredEnquiries}
          onView={handleView}
        />
      </div>

      <EnquirySheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        enquiry={selectedEnquiry}
      />
    </>
  );
}