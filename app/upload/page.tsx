"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

  if (status === "loading") return <p>Lade...</p>;

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <p className="text-lg">Du musst eingeloggt sein, um Plugins hochzuladen.</p>
        <Link href="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition">Zum Login</Link>
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
    <div className="flex flex-col items-center p-10 space-y-8 w-full max-w-3xl mx-auto bg-gray-900 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-white">Create New Resource</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-full">
        
        {/* Basis-Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Basis-Info</h2>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Resource title"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          <input type="text" value={version} onChange={(e) => setVersion(e.target.value)} placeholder="Version"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} placeholder="Tag line"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          <select value={category} onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
            <option value="General">General</option>
            <option value="Addon">Addon</option>
            <option value="API">API</option>
            <option value="Utility">Utility</option>
          </select>
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price (€)"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        {/* Dateien */}
        <div>
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Dateien</h2>
          <input type="file" accept=".jar,.zip" onChange={(e) => setPluginFile(e.target.files?.[0] ?? null)}
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white focus:outline-none transition" />
          <input type="file" accept=".png,.jpg,.jpeg" onChange={(e) => setIconFile(e.target.files?.[0] ?? null)}
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white mt-2 focus:outline-none transition" />
        </div>

        {/* Optionale Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Optionale Links</h2>
          <input type="text" value={discordId} onChange={(e) => setDiscordId(e.target.value)} placeholder="Discord Server ID"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          <input type="text" value={bStatsId} onChange={(e) => setBStatsId(e.target.value)} placeholder="bStats ID"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          <input type="text" value={sourceLink} onChange={(e) => setSourceLink(e.target.value)} placeholder="Source code link"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          <input type="text" value={donationLink} onChange={(e) => setDonationLink(e.target.value)} placeholder="Donation link"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        {/* Dependencies */}
        <div>
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Dependencies & Sprachen</h2>
          <input type="text" value={requiredDeps} onChange={(e) => setRequiredDeps(e.target.value)} placeholder="Required dependencies"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          <input type="text" value={optionalDeps} onChange={(e) => setOptionalDeps(e.target.value)} placeholder="Optional dependencies"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          <input type="text" value={languages} onChange={(e) => setLanguages(e.target.value)} placeholder="Supported languages"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        {/* Beschreibung */}
        <div>
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Beschreibung</h2>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}
            placeholder="Beschreibung (BBCode oder plain text)"
            className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
        </div>

        <button type="submit" className="bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-500 transition">Upload</button>
      </form>
    </div>
  );
}
