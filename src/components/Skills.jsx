export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "C", "Java", "Python"];
  return (
    <section id="skills" className="py-16 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <div key={idx} className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg text-center font-semibold shadow">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
