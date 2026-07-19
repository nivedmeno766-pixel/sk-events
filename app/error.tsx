"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <h1 className="text-5xl font-bold text-[#D4AF37]">
        Something went wrong
      </h1>

      <p className="mt-4 max-w-md text-zinc-400">
        An unexpected error occurred while loading this page.
      </p>

      <button
        onClick={reset}
        className="mt-8 rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:bg-[#c69c2d]"
      >
        Try Again
      </button>
    </div>
  );
}