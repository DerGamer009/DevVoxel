"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Plugin {
  id: number;
  title: string;
  description: string | null;
  createdAt: string;
  user: {
    name: string | null;
  };
}

interface Props {
  plugins: Plugin[];
}

export default function PluginsClient({ plugins }: Props) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pluginsPerPage = 9;

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

  return (
    <main className="max-w-7xl mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Plugins</h1>

      <input
        type="text"
        placeholder="Nach Plugins suchen..."
        className="mb-8 w-full max-w-md rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {displayedPlugins.length === 0 ? (
        <p className="text-gray-400">Keine Plugins gefunden.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPlugins.map((plugin) => (
            <div
              key={plugin.id}
              className="bg-gray-800 rounded-lg shadow hover:shadow-lg transition flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{plugin.title}</h2>
                <p className="text-gray-400 flex-grow line-clamp-3">
                  {plugin.description || "Keine Beschreibung vorhanden."}
                </p>
                <p className="text-xs text-gray-500 mt-4">
                  Erstellt von <strong>{plugin.user.name || "Unbekannt"}</strong>
                </p>
                <p className="text-xs text-gray-500">
                  Hochgeladen am{" "}
                  {new Date(plugin.createdAt).toLocaleDateString("de-DE")}
                </p>
              </div>
              <Link
                href={`/plugins/${plugin.id}`}
                className="bg-blue-600 hover:bg-blue-500 text-white text-center py-2 rounded-b"
              >
                Mehr erfahren
              </Link>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center space-x-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
          >
            Zurück
          </button>
          <span className="px-4 py-2 rounded bg-gray-700">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
          >
            Weiter
          </button>
        </div>
      )}
    </main>
  );
}
