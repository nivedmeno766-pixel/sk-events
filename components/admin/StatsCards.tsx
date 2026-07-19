import {
  Inbox,
  Clock3,
  PhoneCall,
  BadgeCheck,
  PartyPopper,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface Props {
  stats: {
    total: number;
    new: number;
    contacted: number;
    confirmed: number;
    completed: number;
  };
}

export default function StatsCards({ stats }: Props) {
  const cards = [
    {
      title: "Total",
      value: stats.total,
      icon: Inbox,
    },
    {
      title: "New",
      value: stats.new,
      icon: Clock3,
    },
    {
      title: "Contacted",
      value: stats.contacted,
      icon: PhoneCall,
    },
    {
      title: "Confirmed",
      value: stats.confirmed,
      icon: BadgeCheck,
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: PartyPopper,
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-[#D4AF37]/40 hover:-translate-y-1"
          >
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-zinc-400">
                  {card.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold text-[#D4AF37]">
                  {card.value}
                </h2>
              </div>

              <div className="rounded-xl bg-[#D4AF37]/10 p-3">
                <Icon className="h-7 w-7 text-[#D4AF37]" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}