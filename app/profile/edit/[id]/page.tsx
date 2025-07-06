"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditPluginPage() {
  const params = useParams();
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchPlugin = async () => {
      const res = await fetch(`/api/plugin/${params.id}`);
      const data = await res.json();
      setName(data.name);
      setDescription(data.description);
    };

    fetchPlugin();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/plugin/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: params.id,
        name,
        description,
      }),
    });

    if (res.ok) {
      alert("Plugin aktualisiert!");
      router.push("/profile");
    } else {
      alert("Fehler beim Aktualisieren");
    }
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <h1 className="text-xl font-bold">Plugin bearbeiten</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-64">
        <input
          type="text"
          placeholder="Plugin Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Beschreibung"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded h-24"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Speichern</button>
      </form>
    </div>
  );
}
