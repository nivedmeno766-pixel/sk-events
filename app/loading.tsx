import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative h-24 w-24 animate-pulse">
          <Image
            src="/images/logo.png"
            alt="SK Events"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Brand Name */}
        <h1 className="mt-6 font-cabinet text-4xl font-black tracking-wide text-[#D4AF37]">
          SK Events
        </h1>

        <p className="mt-2 text-sm uppercase tracking-[6px] text-white/60">
          Creating Unforgettable Moments
        </p>

        {/* Luxury Loading Bar */}
        <div className="mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-[#D4AF37]" />
        </div>
      </div>
    </div>
  );
}