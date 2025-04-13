import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900 to-purple-900 backdrop-blur-lg border-b border-purple-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-1 text-3xl font-bold tracking-tight transition hover:opacity-90 md:text-3xl"
            aria-label="Home"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Auth
            </span>
            <span className="text-slate-100">App</span>
          </Link>

          <nav className="flex items-center space-x-2 sm:space-x-4">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-slate-800/50 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-slate-800/50 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/sign-in"
              className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2.5 text-base font-medium text-white shadow-md hover:shadow-lg"
            >
              Sign in
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
