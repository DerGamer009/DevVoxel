import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!id) {
    return res.status(400).json({ message: "ID fehlt" });
  }

  try {
    const plugin = await prisma.plugin.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!plugin) {
      return res.status(404).json({ message: "Plugin nicht gefunden" });
    }

    res.status(200).json(plugin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Fehler beim Laden" });
  }
}
