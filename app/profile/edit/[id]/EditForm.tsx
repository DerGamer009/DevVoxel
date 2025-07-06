"use client";

import { useState } from "react";

interface Plugin {
  id: number;
  title: string;
  description: string | null;
}

interface EditFormProps {
  plugin: Plugin;
}

export default function EditForm({ plugin }: EditFormProps) {
  const [title, setTitle] = useState(plugin.title);
  const [description, setDescription] = useState(plugin.description || "");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      const res = await fetch(`/api/plugin/${plugin.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Fehler beim Speichern");
      }

      alert("Plugin erfolgreich aktualisiert!");
    } catch (err: any) {
      setError(err.message || "Unbekannter Fehler");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block font-semibold mb-1">
          Titel
        </label>
        <input
          id="title"
          type="text"
          className="w-full rounded border px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={isSaving}
        />
      </div>

      <div>
        <label htmlFor="description" className="block font-semibold mb-1">
          Beschreibung
        </label>
        <textarea
          id="description"
          className="w-full rounded border px-3 py-2"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isSaving}
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={isSaving}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
      >
        {isSaving ? "Speichert..." : "Speichern"}
      </button>
    </form>
  );
}
