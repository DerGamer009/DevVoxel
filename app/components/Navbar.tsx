"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/" className="font-bold hover:text-gray-300">Home</Link>
        <Link href="/plugins" className="hover:text-gray-300">Plugins</Link>
        <Link href="/upload" className="hover:text-gray-300">Upload</Link>
        {session && <Link href="/profile" className="hover:text-gray-300">Profil</Link>}
      </div>
      <div className="flex space-x-2">
        {!session && (
          <Link
            href="/register"
            className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500"
          >
            Register
          </Link>
        )}
        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-500"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-green-600 px-3 py-1 rounded hover:bg-green-500"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
