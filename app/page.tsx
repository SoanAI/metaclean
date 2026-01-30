"use client";

import ImageCleaner from "../components/ImageCleaner";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Remove Screenshot Metadata.
          <br />
          Instantly.
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          MetaClean removes all hidden metadata from your screenshots.
          <br />
          No uploads. No tracking. Everything runs in your browser.
        </p>

        <div className="mt-10">
          <button
            onClick={() =>
              document.getElementById("cleaner")?.scrollIntoView({
                behavior: "smooth"
              })
            }
            className="rounded-lg bg-black px-8 py-4 text-white text-lg"
          >
            Upload Screenshot
          </button>

          <p className="mt-4 text-sm text-gray-500">
            No uploads • No tracking • 100% private
          </p>
        </div>
      </section>

      {/* CLEANER */}
      <ImageCleaner />

      {/* FEATURES */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
        <Feature title="100% Private">
          Images never leave your device.
        </Feature>
        <Feature title="All Metadata Removed">
          EXIF, IPTC, XMP, device info, timestamps.
        </Feature>
        <Feature title="Instant Download">
          Clean image ready in seconds.
        </Feature>
      </section>

      {/* PRICING */}
      <section className="mt-32 text-center">
        <h2 className="text-3xl font-semibold">Simple pricing</h2>
        <p className="mt-4 text-gray-600">Pay once. Use forever.</p>

        <div className="mt-8 inline-block rounded-xl border px-10 py-8">
          <p className="text-4xl font-bold">$9</p>
          <p className="mt-2 text-gray-600">Lifetime access</p>

<a
  className="gumroad-button mt-6 inline-block rounded-md bg-black px-6 py-3 text-white"
  href="https://ahmedmojid.gumroad.com/l/duedi?wanted=true"
  onClick={() => {
  localStorage.setItem("metaclean_paid", "true");
}}

>
  Get MetaClean
</a>

          
        </div>
      </section>
    </main>
  );
}

function Feature({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border p-6 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{children}</p>
    </div>
  );
}
