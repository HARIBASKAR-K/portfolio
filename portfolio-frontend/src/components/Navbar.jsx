import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/projects" className="hover:text-blue-600">Projects</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
