import Link from 'next/link';
import { Scale, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col justify-center items-center px-4 text-center">
      <div className="w-12 h-12 rounded-lg bg-[#8B2635] text-white flex items-center justify-center mb-6 shadow-sm">
        <Scale className="w-6 h-6" />
      </div>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
        Page Not Found
      </h1>
      <p className="text-stone-600 max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#8B2635] hover:bg-[#701D29] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Home
      </Link>
    </div>
  );
}
