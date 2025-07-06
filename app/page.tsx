"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [plugins, setPlugins] = useState<any[]>([]);
  const [stats, setStats] = useState({ plugins: 0, users: 0, downloads: 0 });

  useEffect(() => {
    async function fetchPlugins() {
      const res = await fetch("/api/plugins/latest");
      const data = await res.json();
      setPlugins(data);
    }

    async function fetchStats() {
      const res = await fetch("/api/stats");
      const data = await res.json();
      setStats(data);
    }

    fetchPlugins();
    fetchStats();
  }, []);

  return (
    <main className="w-full text-white bg-black">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center px-4"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">Willkommen bei DevVoxel Plugins</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
          Die Plattform für Minecraft-Developer: Plugins entdecken, verkaufen oder selbst veröffentlichen!
        </p>
        <Link
          href="/upload"
          className="bg-white text-black px-10 py-4 rounded font-bold text-lg hover:bg-gray-200 transition"
        >
          Starte jetzt
        </Link>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 py-24 px-10"
      >
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-3">⚡ Sofortiger Download</h3>
          <p className="text-gray-400">Lade deine Plugins ohne Verzögerung herunter — schnell & zuverlässig.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-3">🔒 Sicher & geprüft</h3>
          <p className="text-gray-400">Alle Plugins werden geprüft, damit du sicher bist.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-3">💰 Verdienen</h3>
          <p className="text-gray-400">Verkaufe Premium-Plugins & Supporter-Versionen direkt auf der Plattform.</p>
        </div>
      </motion.section>

      {/* Latest Plugins */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-gray-800 py-24 px-10"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Neueste Plugins</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {plugins.length === 0 ? (
            <p className="text-center col-span-full text-gray-400">Keine Plugins gefunden.</p>
          ) : (
            plugins.map((plugin) => (
              <div
                key={plugin.id}
                className="bg-gray-700 rounded-lg overflow-hidden shadow hover:shadow-2xl transition flex flex-col"
              >
                <div className="bg-gray-600 h-40 w-full"></div>
                <div className="p-5 flex flex-col h-full">
                  <h4 className="text-xl font-semibold mb-1">{plugin.title}</h4>
                  <p className="text-gray-400 mb-4 text-sm flex-grow">
                    {plugin.tagline || "Kein Tagline vorhanden."}
                  </p>
                  <Link
                    href={`/plugins/${plugin.id}`}
                    className="bg-blue-600 text-center px-3 py-2 rounded font-medium hover:bg-blue-500 transition"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.section>

      {/* Community Stats */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-gradient-to-r from-purple-700 via-blue-700 to-pink-700 py-24 text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-6">Unsere Community</h2>
        <p className="text-gray-200 mb-12">Gemeinsam stärker! Werde Teil unserer wachsenden Developer-Community.</p>
        <div className="flex flex-wrap justify-center gap-16">
          <div>
            <p className="text-5xl font-extrabold text-white">{stats.plugins}+</p>
            <p className="text-gray-200">Plugins online</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-white">{stats.users}+</p>
            <p className="text-gray-200">Entwickler</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-white">{stats.downloads}+</p>
            <p className="text-gray-200">Downloads</p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="w-full py-24 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit loszulegen?</h2>
        <Link
          href="/register"
          className="bg-green-600 px-12 py-4 rounded font-bold text-lg hover:bg-green-500 transition"
        >
          Jetzt registrieren
        </Link>
      </section>

      {/* Neuer Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">DevVoxel</h3>
            <p>
              Die Plattform für hochwertige Minecraft-Plugins, Tools und Developer-Ressourcen.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Seiten</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition">Startseite</a></li>
              <li><a href="/plugins" className="hover:text-white transition">Plugins</a></li>
              <li><a href="/upload" className="hover:text-white transition">Plugin hochladen</a></li>
              <li><a href="/profile" className="hover:text-white transition">Mein Profil</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href="/support" className="hover:text-white transition">Kontakt</a></li>
              <li><a href="/tos" className="hover:text-white transition">AGB</a></li>
              <li><a href="/privacy" className="hover:text-white transition">Datenschutz</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Folge uns</h4>
            <ul className="space-y-2">
              <li><a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Discord</a></li>
              <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
              <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a></li>
              <li><a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500 text-sm">
          © 2025 DevVoxel. Alle Rechte vorbehalten.
        </div>
      </footer>
    </main>
  );
}
