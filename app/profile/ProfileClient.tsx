"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface Plugin {
  id: number;
  title: string;
  description: string | null;
  createdAt: string;
}

interface User {
  name: string | null;
  email: string;
  image?: string | null;
  id: string | number;
}

interface Props {
  user: User;
  plugins: Plugin[];
}

export default function ProfileClient({ user, plugins }: Props) {
  const [name, setName] = useState(user.name || "");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(user.image || null);
  const [isSaving, setIsSaving] = useState(false);

  // Plugins Suche & Pagination
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pluginsPerPage = 6;

  const filteredPlugins = useMemo(() => {
    return plugins.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [plugins, search]);

  const totalPages = Math.ceil(filteredPlugins.length / pluginsPerPage);
  const displayedPlugins = filteredPlugins.slice(
    (page - 1) * pluginsPerPage,
    page * pluginsPerPage
  );

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  }

  async function saveProfile() {
    setIsSaving(true);
    const formData = new FormData();
    formData.append("name", name);
    if (avatarFile) formData.append("avatar", avatarFile);

    try {
      const res = await fetch("/api/profile/update", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Profil erfolgreich aktualisiert!");
        // Optional: reload oder State aktualisieren
      } else {
        alert("Fehler beim Speichern");
      }
    } catch {
      alert("Unerwarteter Fehler");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="max-w-7xl mx-auto p-8 min-h-screen">
      {/* Profil Info + Bearbeiten */}
      <section className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center text-6xl font-bold text-white">
            {!avatarPreview && (name ? name[0].toUpperCase() : user.email[0].toUpperCase())}
            {avatarPreview && <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />}
          </div>
          <label className="cursor-pointer text-sm text-blue-500 hover:underline">
            Avatar ändern
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
              disabled={isSaving}
            />
          </label>
        </div>

        <div className="flex-1 max-w-xl space-y-6">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              className="w-full rounded border border-gray-600 px-3 py-2 bg-gray-800 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSaving}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">E-Mail</label>
            <input
              type="email"
              className="w-full rounded border border-gray-600 px-3 py-2 bg-gray-800 text-white"
              value={user.email}
              disabled
            />
            <p className="text-xs text-gray-400 mt-1">E-Mail kann nicht geändert werden.</p>
          </div>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
            onClick={saveProfile}
            disabled={isSaving}
          >
            {isSaving ? "Speichert..." : "Profil speichern"}
          </button>
        </div>
      </section>

      {/* Plugins Übersicht */}
      <section>
        <h2 className="text-3xl font-bold mb-6">
          Meine Plugins ({filteredPlugins.length})
        </h2>

        {/* Suche */}
        <input
          type="text"
          placeholder="Plugins durchsuchen..."
          className="mb-6 w-full max-w-md rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        {/* Plugin-Liste */}
        {displayedPlugins.length === 0 ? (
          <p className="text-gray-400">Keine Plugins gefunden.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPlugins.map((plugin) => (
              <div
                key={plugin.id}
                className="border rounded-lg p-4 bg-gray-800 hover:bg-gray-700 transition flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-2">{plugin.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {plugin.description || "Keine Beschreibung verfügbar."}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Hochgeladen am {new Date(plugin.createdAt).toLocaleDateString("de-DE")}
                </p>

                <div className="flex gap-2 mt-auto">
                  <Link
                    href={`/profile/edit/${plugin.id}`}
                    className="flex-1 bg-yellow-500 text-black rounded py-1 text-center hover:bg-yellow-400 transition"
                  >
                    Bearbeiten
                  </Link>

                  <button
                    className="flex-1 bg-red-600 rounded py-1 text-white hover:bg-red-500 transition"
                    onClick={async () => {
                      if (!confirm("Plugin wirklich löschen?")) return;
                      const res = await fetch("/api/plugin/delete", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ id: plugin.id }),
                      });
                      if (res.ok) location.reload();
                      else alert("Fehler beim Löschen");
                    }}
                  >
                    Löschen
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-3">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
            >
              Zurück
            </button>
            <span className="px-3 py-1 rounded bg-gray-700">
              {page} / {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
            >
              Weiter
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
