import { useState } from "react";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbwx1qsO8fG_ZmJPngzBmUHKLk21X4Y463h1ynkdxKMeXTnuHeFXFP6sT_p3JIT73U3fNw/exec";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const body = new URLSearchParams();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("message", formData.message);

      const response = await fetch(SHEET_URL, {
        method: "POST",
        body
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again!");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Network / CORS error: " + err.message);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 text-center transition-colors duration-500">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
        <input
          name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" required
          className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white w-full transition-colors duration-300"
        />
        <input
          name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" required
          className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white w-full transition-colors duration-300"
        />
        <textarea
          name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required
          className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white w-full resize-none transition-colors duration-300"
        />
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition-colors duration-300">
          Send
        </button>
      </form>
      <p className="mt-4">{status}</p>
      <p className="mt-2">
        Or email me at{" "}
        <a href="mailto:yashasvi.khatri05@gmail.com" className="text-yellow-500">
          yashasvi.khatri05@gmail.com
        </a>
      </p>
    </section>
  );
}
