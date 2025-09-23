export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center text-center py-20">
      <img
        src="\profile.jpeg"
        alt="Profile"
        className="w-40 h-40 rounded-full mb-6 shadow-lg object-cover"
      />
      <h2 className="text-3xl font-bold">Hello, I'm <span className="text-yellow-500">Yashasvi Khatri</span></h2>
      <p className="mt-2">A passionate Machine learner</p>
      <a href="#contact" className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600">
        Hire Me
      </a>
    </section>
  );
}
