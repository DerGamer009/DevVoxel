"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <p className="mb-4 text-lg">Du musst eingeloggt sein, um Plugins hochzuladen.</p>
        <a href="/login" className="text-blue-600 underline hover:text-blue-800">
          Zum Login
        </a>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) return setError("Name ist erforderlich.");
    if (!file) return setError("Datei ist erforderlich.");
    if (!/\.(jar|zip)$/i.test(file.name)) return setError("Nur .jar oder .zip Dateien erlaubt.");

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);

    try {
      const res = await fetch("/api/plugin/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Plugin erfolgreich hochgeladen!");
        router.push("/profile"); // z.B. zurück zum Profil
      } else {
        const data = await res.json();
        setError(data.message || "Fehler beim Hochladen");
      }
    } catch {
      setError("Unerwarteter Fehler");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Plugin hochladen</h1>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="description">
            Beschreibung (BBCode erlaubt)
          </label>
          <textarea
            id="description"
            className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white resize-y"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="file">
            Datei (.jar oder .zip) *
          </label>
          <input
            id="file"
            type="file"
            accept=".jar,.zip"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            disabled={loading}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 px-6 py-3 rounded text-white font-semibold hover:bg-green-500 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Hochladen..." : "Plugin hochladen"}
        </button>
      </form>
    </main>
  );
}
