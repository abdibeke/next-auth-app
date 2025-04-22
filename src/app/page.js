import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white py-14 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Page Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          Welcome to <span className="text-indigo-600">AuthApp</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          A full-stack starter template with authentication and database support,
          built using modern Next.js practices.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link
            href="/about"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 shadow transition-all"
          >
            Learn More
          </Link>
          <a
            href="https://github.com/abdibeke/next-auth-app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-all"
          >
            View on GitHub
          </a>
        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              title: "Authentication",
              desc: "Secure, modern auth powered by Clerk.",
            },
            {
              title: "Database Ready",
              desc: "MongoDB integration for scalable data storage.",
            },
            {
              title: "Scalable Framework",
              desc: "Powered by Next.js with SSR for performance.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
