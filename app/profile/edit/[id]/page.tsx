import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function EditPluginPage({
  params,
}: {
  params: { id: string };
}) {
  const plugin = await prisma.plugin.findUnique({
    where: { id: Number(params.id) },
  });

  if (!plugin) {
    return <p>Plugin nicht gefunden.</p>;
  }

  return (
    <main className="max-w-xl mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-8">Plugin bearbeiten: {plugin.name}</h1>

      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
          <input
            id="name"
            defaultValue={plugin.name}
            className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-1 font-semibold">Beschreibung</label>
          <textarea
            id="description"
            defaultValue={plugin.description || ""}
            className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white resize-y"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 px-6 py-3 rounded text-white font-semibold hover:bg-green-500 transition"
        >
          Speichern
        </button>
      </form>
    </main>
  );
}
