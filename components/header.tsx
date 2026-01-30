"use client";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold">MetaClean</span>
        <button className="rounded-md bg-black px-4 py-2 text-sm text-white">
          Clean Image
        </button>
      </div>
    </header>
  );
}
