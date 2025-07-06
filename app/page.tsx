import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">Willkommen bei deiner Seite 🚀</h1>
      <Link href="/plugins" className="text-blue-600 underline">
        ➡️ Plugins anzeigen
      </Link>
    </main>
  );
}
