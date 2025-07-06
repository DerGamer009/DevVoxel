"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfileButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session?.user) {
    return (
      <div className="flex flex-col items-center space-y-2">
        <p>✅ Eingeloggt als <strong>{session.user.email}</strong></p>
        <button
          onClick={() => signOut()}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Login
    </button>
  );
}
