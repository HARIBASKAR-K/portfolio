import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contact", form);
    alert("Message sent successfully");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xl p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            type="email"
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full border p-3 rounded"
            required
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded">
            Send Message
          </button>
        </form>

        <a
          href="/resume.pdf"
          download
          className="block mt-4 text-center text-blue-600 underline"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}