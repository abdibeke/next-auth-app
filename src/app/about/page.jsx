import React from "react";

const About = () => {
  const techStack = [
    {
      name: "Next.js",
      description:
        "A React framework for building fast, modern applications with built-in SSR and SSG support.",
      icon: (
        <svg className="w-10 h-10 text-indigo-500" viewBox="0 0 128 128">
          <path
            d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      name: "Clerk",
      description:
        "An all-in-one authentication solution for modern web apps—secure, customizable, and fast.",
      icon: (
        <svg
          className="w-10 h-10 text-purple-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      description:
        "A flexible NoSQL database optimized for scalability, perfect for modern web applications.",
      icon: (
        <svg
          className="w-10 h-10 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-6 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          About <span className="text-indigo-600">This Project</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          This project serves as a modern, full-stack web template powered by
          cutting-edge tools for authentication, performance, and scalability.
        </p>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Tech Stack Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="bg-gray-100 p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Getting Started
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-left text-gray-700 mb-6">
            <li>Clone the repository</li>
            <li>
              Install dependencies:{" "}
              <code className="bg-white border px-2 py-1 rounded text-sm">
                npm install
              </code>
            </li>
            <li>Set up environment variables</li>
            <li>
              Start the dev server:{" "}
              <code className="bg-white border px-2 py-1 rounded text-sm">
                npm run dev
              </code>
            </li>
          </ol>
          <div className="text-center">
            <a
              href="https://github.com/abdibeke/next-auth-app"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              View on GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
