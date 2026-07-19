"use client";

import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface Props {
  onView: () => void;
}

export default function EnquiryActions({
  onView,
}: Props) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onView}
      className="border-zinc-700 bg-transparent text-white transition-all duration-200 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
    >
      <Eye className="mr-2 h-4 w-4" />
      View
    </Button>
  );
}