export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "A modern portfolio built with React and Tailwind." },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
            <h3 className="font-bold text-lg">{p.title}</h3>
            <p className="text-sm mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
