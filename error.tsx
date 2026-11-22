"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex justify-center items-center flex-col gap-6 h-screen">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg text-red-400">{error.message || "ERROR!"}</p>
      
      <button
        onClick={() => reset()}
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg hover:bg-accent-600 transition-all"
      >
        Try again
      </button>
    </main>
  );
}