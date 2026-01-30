"use client";

import { useRef, useState } from "react";
import PricingPopup from "./PricingPopup";

type Status = "idle" | "processing" | "done" | "error";

export default function ImageCleaner() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [filename, setFilename] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  function handleSelect() {
    inputRef.current?.click();
  }

  function handleFile(file: File) {
    setStatus("processing");
    setError(null);
    setDownloadUrl(null);

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setStatus("error");
        setError("Canvas not supported");
        return;
      }

      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setStatus("error");
            setError("Failed to process image");
            return;
          }

          const cleanUrl = URL.createObjectURL(blob);
          const cleanName = file.name.replace(
            /\.(png|jpe?g|webp)$/i,
            "-clean.$1"
          );

          setFilename(cleanName);
          setDownloadUrl(cleanUrl);
          setStatus("done");

          // Show popup ONLY if user has not paid
          if (!localStorage.getItem("metaclean_paid")) {
            setShowPopup(true);
          }

          URL.revokeObjectURL(objectUrl);
        },
        file.type,
        1
      );
    };

    img.onerror = () => {
      setStatus("error");
      setError("Invalid image file");
    };

    img.src = objectUrl;
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      setStatus("error");
      setError("Unsupported file format");
      return;
    }

    handleFile(file);
  }

  return (
    <>
      <div
        id="cleaner"
        className="mt-20 rounded-2xl border p-10 text-center"
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          className="hidden"
          onChange={onInputChange}
        />

        {status === "idle" && (
          <>
            <p className="text-lg font-medium">
              Upload a screenshot to remove metadata
            </p>
            <button
              onClick={handleSelect}
              disabled={status !== "idle"}

              className="mt-6 rounded-lg bg-black px-8 py-4 text-white disabled:opacity-50"
            >
              Select Image
            </button>
          </>
        )}

        {status === "processing" && (
          <p className="text-lg font-medium">
            Cleaning metadata…
          </p>
        )}

        {status === "done" && downloadUrl && (
          <>
            <p className="text-lg font-medium">
              Metadata removed successfully
            </p>
            <a
              href={downloadUrl}
              download={filename}
              className="mt-6 inline-block rounded-lg bg-black px-8 py-4 text-white"
            >
              Download Clean Image
            </a>
          </>
        )}

        {status === "error" && (
          <p className="text-red-600 font-medium">{error}</p>
        )}
      </div>

      {showPopup && (
        <PricingPopup onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}
