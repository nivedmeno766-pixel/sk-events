"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Mail,
  Briefcase,
  Images,
  Settings,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Enquiries",
    href: "/admin/enquiries",
    icon: Mail,
  },
  {
    name: "Services",
    href: "/admin/services",
    icon: Briefcase,
  },
  {
    name: "Gallery",
    href: "/admin/gallery",
    icon: Images,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });

      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-950">
      {/* Logo */}
      <div className="border-b border-zinc-800 p-6">
        <h1 className="text-2xl font-bold text-[#D4AF37]">
          SK EVENTS
        </h1>

        <p className="text-sm text-zinc-500">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          const active =
            pathname === link.href ||
            (link.href !== "/admin" &&
              pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                active
                  ? "bg-[#D4AF37] text-black"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-zinc-800 p-4">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full justify-start border-[#D4AF37] bg-transparent text-[#D4AF37] transition-all duration-200 hover:bg-[#D4AF37] hover:text-black"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
}