import { Badge } from "@/components/ui/badge";
import { EnquiryStatus } from "@prisma/client";

interface Props {
  status: EnquiryStatus;
}

export default function StatusBadge({ status }: Props) {
  switch (status) {
    case "NEW":
      return (
        <Badge className="bg-blue-500/15 text-blue-400 hover:bg-blue-500/20">
          New
        </Badge>
      );

    case "CONTACTED":
      return (
        <Badge className="bg-yellow-500/15 text-yellow-400 hover:bg-yellow-500/20">
          Contacted
        </Badge>
      );

    case "CONFIRMED":
      return (
        <Badge className="bg-green-500/15 text-green-400 hover:bg-green-500/20">
          Confirmed
        </Badge>
      );

    case "COMPLETED":
      return (
        <Badge className="bg-purple-500/15 text-purple-400 hover:bg-purple-500/20">
          Completed
        </Badge>
      );

    default:
      return <Badge>{status}</Badge>;
  }
}