"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Login fehlgeschlagen. Bitte überprüfe deine Daten.");
    } else {
      router.push("/profile");
    }
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-64">
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
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Login
        </button>
      </form>
      <p className="text-sm">
        Noch keinen Account?{" "}
        <Link href="/register" className="text-blue-600 underline">
          Registrieren
        </Link>
      </p>
    </div>
  );
}
