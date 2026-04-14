import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fodbot-dark-bg px-4">
      <div className="text-center">
        <p className="font-display text-8xl font-bold text-fodbot-gold mb-4 opacity-30">404</p>
        <h1 className="font-display text-3xl font-bold text-white mb-3">Page not found.</h1>
        <p className="font-body text-fodbot-silver mb-8 max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-fodbot-gold text-fodbot-black font-body font-semibold text-sm hover:bg-fodbot-gold-light transition-colors duration-200"
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
