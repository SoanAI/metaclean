"use client";

export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-gray-600">
        {/* Feedback */}
        <div className="mb-8">
                      <a
            href="https://ahmedmojid.gumroad.com/l/duedi?wanted=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 rounded-md bg-black px-5 py-2 text-white"
            onClick={() => {
  localStorage.setItem("metaclean_paid", "true");
}}

          >
            Buy lifetime access — $9
          </a>
          <p className="font-medium text-gray-900">
            Feedback
          </p>
          <p className="mt-2 text-gray-600 max-w-md">
            When you opened MetaClean, what were you expecting to do?
            Did it work the way you imagined?
          </p>
          <p className="mt-2 text-gray-600">
            I’d love to hear your thoughts.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span>
            © {new Date().getFullYear()} MetaClean
          </span>

          {/* Social */}
          <a
            href="https://x.com/indieshipx247"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition"
          >
            {/* X icon (SVG, no dependency) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zM16.99 19.77h1.833L7.084 4.126H5.117L16.99 19.77z" />
            </svg>
            <span>Share feedback on X</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
