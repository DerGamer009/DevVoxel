import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const pluginCount = await prisma.plugin.count();
  const userCount = await prisma.user.count();

  // Prüfe, ob du in deiner Plugin-Tabelle ein Feld "downloads" hast!
  const downloads = await prisma.plugin.aggregate({
    _sum: {
      downloads: true,
    },
  });

  res.status(200).json({
    plugins: pluginCount,
    users: userCount,
    downloads: downloads._sum.downloads || 0,
  });
}
