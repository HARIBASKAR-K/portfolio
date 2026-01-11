import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  // Fetch projects from backend
  useEffect(() => {
    fetch("https://portfolio-vie1.onrender.com/api/projects") // your backend endpoint
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section className="min-h-screen bg-[#f9fafb] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p._id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
              <h3 className="text-xl font-bold text-blue-600">{p.title}</h3>
              <p className="mt-3 text-gray-600">{p.description}</p>
              <div className="mt-3 text-sm text-gray-500">
                <b>Tech:</b> {p.tech}
              </div>
              <a href={p.link} className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}