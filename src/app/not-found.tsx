import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-semibold text-[var(--farm-green)]">Page not found</h1>
      <p className="text-gray-700 max-w-md">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-full border border-black/10 bg-white hover:bg-[var(--farm-sky)]/60"
      >
        Go back home
      </Link>
    </div>
  );
}