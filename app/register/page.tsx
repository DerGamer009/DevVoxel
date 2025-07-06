"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (res.ok) {
      alert("Erfolgreich registriert! Du kannst dich jetzt einloggen.");
      router.push("/login");
    } else {
      const data = await res.json();
      alert(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <h1 className="text-2xl font-bold">Registrieren</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-64">
        <input
          type="text"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Registrieren</button>
      </form>
    </div>
  );
}
