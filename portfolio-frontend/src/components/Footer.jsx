import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1F] text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">MyPortfolio</h1>
          <p className="text-gray-400">
            A professional portfolio showcasing projects, skills, and contact information.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="/projects" className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Haribaskar. All rights reserved.
      </div>
    </footer>
  );
}