"use client";

import { useEffect, useState } from "react";

interface Props {
  params: {
    id: string | null | undefined;
  };
}

export default function EditPluginPage({ params }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function fetchPlugin() {
      if (!params?.id) return; // <-- Wichtig: Abfangen, falls params oder id fehlt

      const res = await fetch(`/api/plugin/${params.id}`);
      if (!res.ok) {
        // Fehlerbehandlung hier optional
        return;
      }
      const data = await res.json();
      setName(data.name);
      setDescription(data.description);
    }

    fetchPlugin();
  }, [params?.id]);

  return (
    <div>
      {/* Dein Formular etc. */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Plugin Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Beschreibung"
      />
      {/* Submit Button usw. */}
    </div>
  );
}
