"use client";
import { useEffect } from "react";

export default function PricingPopup({
  onClose
}: {
  onClose: () => void;
}) {
    useEffect(() => {
  // Lock background scroll when popup opens
  document.body.style.overflow = "hidden";

  return () => {
    // Restore scroll when popup closes
    document.body.style.overflow = "auto";
  };
}, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <h2 className="text-2xl font-bold">
          You just protected your privacy 🔒
        </h2>

        <p className="mt-4 text-gray-600">
          MetaClean removes all hidden metadata locally in your browser.
          No uploads. No tracking. Ever.
        </p>

        <div className="mt-6 rounded-xl border p-6">
          <p className="text-4xl font-bold">$9</p>
          <p className="mt-1 text-gray-600">Lifetime access</p>
        </div>

<a
  className="gumroad-button mt-6 block w-full rounded-lg bg-black px-6 py-3 text-white text-center"
  href="https://ahmedmojid.gumroad.com/l/duedi?wanted=true"
  onClick={() => {
  localStorage.setItem("metaclean_paid", "true");
}}

>
  Unlock MetaClean
</a>


        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 underline"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
