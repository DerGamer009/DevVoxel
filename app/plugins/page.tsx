import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function PluginsPage() {
  const plugins = await prisma.plugin.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <h1 className="text-2xl font-bold">Alle Plugins</h1>
      {plugins.length === 0 && <p>Keine Plugins vorhanden.</p>}
      {plugins.map((plugin) => (
        <div key={plugin.id} className="border p-4 rounded w-full max-w-md">
          <h2 className="text-lg font-semibold">{plugin.title}</h2>
          <p className="text-sm text-gray-600">{plugin.description}</p>
          <p className="text-xs mt-2">Hochgeladen von: <strong>{plugin.user.name}</strong></p>
          <p className="text-xs text-gray-500">
            {new Date(plugin.createdAt).toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
      ))}
    </div>
  );
}
