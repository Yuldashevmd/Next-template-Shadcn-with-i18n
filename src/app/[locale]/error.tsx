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
    <div className="flex items-center justify-center h-screen">
      <h2 className="lg:text-3xl md:text-2xl sm:text-xl">
        Something went wrong!
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
