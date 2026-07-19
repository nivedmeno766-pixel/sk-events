export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#D4AF37] border-t-transparent" />
        <p className="text-lg font-medium text-[#D4AF37]">
          Loading Gallery...
        </p>
      </div>
    </div>
  );
}