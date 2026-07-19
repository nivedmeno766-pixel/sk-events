import { Enquiry } from "@prisma/client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent } from "@/components/ui/card";

import StatusBadge from "./StatusBadge";
import EnquiryActions from "./EnquiryActions";

interface Props {
  enquiries: Enquiry[];
  onView: (enquiry: Enquiry) => void;
}

export default function EnquiriesTable({
  enquiries,
  onView,
}: Props) {
  return (
    <Card className="border-zinc-800 bg-zinc-900">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-zinc-800 hover:bg-transparent">
              <TableHead>Name</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {enquiries.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-32 text-center text-zinc-400"
                >
                  No enquiries found.
                </TableCell>
              </TableRow>
            ) : (
              enquiries.map((enquiry) => (
                <TableRow
                  key={enquiry.id}
                  className="border-zinc-800 hover:bg-zinc-800/40"
                >
                  <TableCell>
                    <div>
                      <p className="font-medium">
                        {enquiry.name}
                      </p>

                      <p className="text-sm text-zinc-500">
                        {enquiry.email}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    {enquiry.eventType}
                  </TableCell>

                  <TableCell>
                    {enquiry.eventDate
                      ? new Date(
                          enquiry.eventDate
                        ).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : "-"}
                  </TableCell>

                  <TableCell>
                    <StatusBadge
                      status={enquiry.status}
                    />
                  </TableCell>

                  <TableCell className="text-right">
                    <EnquiryActions
                      onView={() => onView(enquiry)}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}