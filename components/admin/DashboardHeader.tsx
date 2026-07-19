import { CalendarDays } from "lucide-react";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
          Admin Panel
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          SK Events Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage enquiries, bookings and customer requests.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3">
        <CalendarDays className="h-5 w-5 text-[#D4AF37]" />

        <span className="text-sm text-zinc-300">
          {today}
        </span>
      </div>
    </header>
  );
}