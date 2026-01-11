import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-blue-600">Haribaskar</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-lg">
            MERN Stack Developer crafting secure, scalable & beautiful web apps.
          </p>

          <div className="mt-8 flex gap-4">
            <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              View Projects
            </Link>
            <Link to="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50">
              Hire Me
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              className="w-80 mx-auto"
              alt="profile"
            />
            <h3 className="text-center mt-6 font-bold text-xl">Full Stack Developer</h3>
            <p className="text-center text-gray-600 mt-2">
              React • Node • MongoDB • Tailwind
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
