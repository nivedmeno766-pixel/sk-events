import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <h1 className="text-8xl md:text-9xl font-black text-[#D4AF37] font-cabinet">
          404
        </h1>

        <h2 className="mt-8 text-3xl md:text-5xl font-bold">
          Oops!
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-8">
          Looks like this event hasn't been planned yet.
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-12 bg-[#D4AF37] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300"
        >
          Back To Home
        </Link>

      </div>

    </main>
  );
}