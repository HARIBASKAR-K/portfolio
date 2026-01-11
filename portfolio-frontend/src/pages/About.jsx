export default function About() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          About <span className="text-blue-600">Me</span>
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-600">
          I am a Full Stack Developer passionate about building scalable,
          secure and user-friendly web applications using modern technologies.
        </p>

        {/* Info Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-xl text-blue-600">Who I Am</h3>
            <p className="mt-3 text-gray-600">
              A self-driven developer focused on learning, building and improving real-world web apps.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-xl text-blue-600">My Goal</h3>
            <p className="mt-3 text-gray-600">
              To become a professional software engineer and contribute to impactful products.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-xl text-blue-600">Experience</h3>
            <p className="mt-3 text-gray-600">
              Fresher with hands-on project experience in MERN stack applications.
            </p>
          </div>
        </div>

        {/* Skills */}
        <h3 className="text-3xl font-bold text-center mt-20 mb-10">Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["HTML","CSS","JavaScript","React","Node.js","MongoDB","Tailwind","GitHub"].map(skill => (
            <div key={skill} className="border rounded-xl p-5 hover:bg-blue-50 transition font-semibold">
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
