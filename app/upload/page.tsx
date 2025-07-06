"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UploadIcon } from "@radix-ui/react-icons"; // Optional: für Symbol

export default function UploadPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [version, setVersion] = useState("1.0.0");
  const [tagline, setTagline] = useState("");
  const [category, setCategory] = useState("General");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [discordId, setDiscordId] = useState("");
  const [bStatsId, setBStatsId] = useState("");
  const [donationLink, setDonationLink] = useState("");
  const [requiredDeps, setRequiredDeps] = useState("");
  const [optionalDeps, setOptionalDeps] = useState("");
  const [languages, setLanguages] = useState("");
  const [sourceLink, setSourceLink] = useState("");
  const [pluginFile, setPluginFile] = useState<File | null>(null);
  const [iconFile, setIconFile] = useState<File | null>(null);

  if (status === "loading") return <p className="text-center text-gray-300">Lade...</p>;

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center p-10 space-y-4">
        <p className="text-lg text-white">Du musst eingeloggt sein, um Plugins hochzuladen.</p>
        <Link href="/login" className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-500 transition">Zum Login</Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("version", version);
    formData.append("tagline", tagline);
    formData.append("category", category);
    formData.append("price", String(price));
    formData.append("description", description);
    formData.append("discordId", discordId);
    formData.append("bStatsId", bStatsId);
    formData.append("donationLink", donationLink);
    formData.append("requiredDeps", requiredDeps);
    formData.append("optionalDeps", optionalDeps);
    formData.append("languages", languages);
    formData.append("sourceLink", sourceLink);
    formData.append("userId", String(session.user.id));

    if (pluginFile) formData.append("pluginFile", pluginFile);
    if (iconFile) formData.append("iconFile", iconFile);

    const res = await fetch("/api/plugin/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Plugin erfolgreich hochgeladen!");
      router.push("/profile");
    } else {
      const data = await res.json();
      alert(`Fehler: ${data.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center p-10 space-y-8 w-full max-w-3xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center mb-4">Create New Resource</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-8 w-full">
        {/* Block: Basic Info */}
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">📝 Basis-Informationen</h2>
          <div className="space-y-4">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titel (z. B. 'PlayerDataSync')"
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <input type="text" value={version} onChange={(e) => setVersion(e.target.value)} placeholder="Version (z. B. 1.0.0)"
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} placeholder="Kurze Tagline"
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <select value={category} onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              <option value="General">General</option>
              <option value="Addon">Addon</option>
              <option value="API">API</option>
              <option value="Utility">Utility</option>
            </select>
            <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Preis (€)"
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <p className="text-sm text-gray-400">Setze 0 für kostenlos.</p>
          </div>
        </div>

        {/* Block: Dateien */}
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">📄 Dateien</h2>
          <div className="space-y-4">
            <input type="file" accept=".jar,.zip" onChange={(e) => setPluginFile(e.target.files?.[0] ?? null)}
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 file:cursor-pointer" />
            <p className="text-sm text-gray-400">Erlaubt: .jar, .zip</p>
            <input type="file" accept=".png,.jpg,.jpeg" onChange={(e) => setIconFile(e.target.files?.[0] ?? null)}
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 file:cursor-pointer" />
            <p className="text-sm text-gray-400">Erlaubt: .png, .jpg (Icon)</p>
          </div>
        </div>

        {/* Block: Zusätzliche Links */}
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">🔗 Optionale Links</h2>
          <div className="space-y-4">
            <input type="text" value={discordId} onChange={(e) => setDiscordId(e.target.value)} placeholder="Discord Server ID"
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <input type="text" value={bStatsId} onChange={(e) => setBStatsId(e.target.value)} placeholder="bStats ID"
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <input type="text" value={sourceLink} onChange={(e) => setSourceLink(e.target.value)} placeholder="Source Code Link"
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <input type="text" value={donationLink} onChange={(e) => setDonationLink(e.target.value)} placeholder="Spenden-Link"
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          </div>
        </div>

        {/* Block: Abhängigkeiten & Sprachen */}
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">⚙️ Abhängigkeiten & Sprachen</h2>
          <div className="space-y-4">
            <input type="text" value={requiredDeps} onChange={(e) => setRequiredDeps(e.target.value)} placeholder="Benötigte Plugins"
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <input type="text" value={optionalDeps} onChange={(e) => setOptionalDeps(e.target.value)} placeholder="Optionale Plugins"
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <input type="text" value={languages} onChange={(e) => setLanguages(e.target.value)} placeholder="Unterstützte Sprachen"
              className="w-full p-3 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          </div>
        </div>

        {/* Block: Beschreibung */}
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">🖊️ Beschreibung</h2>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}
            placeholder="Beschreibung (BBCode oder Text)"
            className="w-full p-3 rounded border border-gray-700 bg-gray-900 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        <button type="submit" className="flex items-center justify-center bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-500 transition">
          <UploadIcon className="mr-2" />
          Upload
        </button>
      </form>
    </div>
  );
}
