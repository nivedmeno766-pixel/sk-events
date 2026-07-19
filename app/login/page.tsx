"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success("Login successful!");

      router.push("/admin");
      router.refresh();
    } catch {
      toast.error("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-5 rounded-xl border border-zinc-800 bg-zinc-900 p-8"
      >
        <h1 className="text-center text-3xl font-bold text-[#D4AF37]">
          SK Events Admin
        </h1>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#D4AF37] text-black hover:bg-[#c69c2d]"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </main>
  );
}