import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-black dark:bg-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold">MyPortfolio</h1>
      <ul className="flex gap-4">
        <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-300">About</a></li>
        <li><a href="#skills" className="hover:text-yellow-300">Skills</a></li>
        <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
      </ul>
      <button onClick={toggleTheme} className="ml-4 text-xl">
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
