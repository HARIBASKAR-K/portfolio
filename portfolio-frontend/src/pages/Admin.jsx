import { useEffect, useState } from "react";

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", tech: "", link: "" });
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("");

  // Fetch projects from backend
  const fetchProjects = async () => {
    const res = await fetch("http://localhost:5000/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle input changes
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  // Add or Edit project
  const handleSubmit = async e => {
    e.preventDefault();
    if (editingId) {
      // Edit project
      const res = await fetch(`http://localhost:5000/api/projects/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("Project updated successfully!");
    } else {
      // Add new project
      const res = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("Project added successfully!");
    }
    setForm({ title: "", description: "", tech: "", link: "" });
    setEditingId(null);
    fetchProjects();
  };

  // Delete project
  const handleDelete = async id => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    const res = await fetch(`http://localhost:5000/api/projects/${id}`, { method: "DELETE" });
    if (res.ok) {
      setStatus("Project deleted successfully!");
      fetchProjects();
    } else {
      setStatus("Failed to delete project");
    }
  };

  // Set project for editing
  const handleEdit = project => {
    setForm({
      title: project.title,
      description: project.description,
      tech: project.tech,
      link: project.link,
    });
    setEditingId(project._id);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] p-10">
      <h2 className="text-4xl font-bold text-center mb-10">Admin Panel</h2>

      {/* Status */}
      {status && <p className="text-center text-green-600 mb-4">{status}</p>}

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          name="tech"
          placeholder="Technologies Used"
          value={form.tech}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          name="link"
          placeholder="Project Link"
          value={form.link}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          {editingId ? "Update Project" : "Add Project"}
        </button>
      </form>

      {/* Projects List */}
      <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p._id} className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-blue-600">{p.title}</h3>
              <p className="text-gray-600">{p.description}</p>
              <p className="text-gray-500 text-sm"><b>Tech:</b> {p.tech}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View Project</a>
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                onClick={() => handleEdit(p)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => handleDelete(p._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}