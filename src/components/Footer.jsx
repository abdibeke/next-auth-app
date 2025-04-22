const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Auth App</span>. All rights
          reserved.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Crafted with <span className="hover:animate-pulse">❤️</span> and{" "}
          <span className="text-white">passion</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
