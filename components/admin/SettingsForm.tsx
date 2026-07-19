"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  settings: {
    heroTitle: string;
    heroSubtitle: string;
    phone: string;
    whatsapp: string;
    email: string;
    instagram: string;
    facebook: string;
    address: string;
  };
}

export default function SettingsForm({
  settings,
}: Props) {
  const [form, setForm] = useState(settings);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSave() {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success("Settings updated successfully.");
    } catch {
      toast.error("Failed to update settings.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5 rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <Input
        name="heroTitle"
        placeholder="Hero Title"
        value={form.heroTitle}
        onChange={handleChange}
      />

      <Input
        name="heroSubtitle"
        placeholder="Hero Subtitle"
        value={form.heroSubtitle}
        onChange={handleChange}
      />

      <Input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <Input
        name="whatsapp"
        placeholder="WhatsApp"
        value={form.whatsapp}
        onChange={handleChange}
      />

      <Input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <Input
        name="instagram"
        placeholder="Instagram"
        value={form.instagram}
        onChange={handleChange}
      />

      <Input
        name="facebook"
        placeholder="Facebook"
        value={form.facebook}
        onChange={handleChange}
      />

      <Input
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />

      <Button
        onClick={handleSave}
        disabled={loading}
        className="bg-[#D4AF37] text-black hover:bg-[#c69c2d]"
      >
        {loading ? "Saving..." : "Save Changes"}
      </Button>
    </div>
  );
}