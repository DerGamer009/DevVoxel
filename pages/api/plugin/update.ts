import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id, name, description } = req.body;

  if (!id || !name || !description) {
    return res.status(400).json({ message: "Fehlende Felder" });
  }

  try {
    await prisma.plugin.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
      },
    });
    res.status(200).json({ message: "Plugin aktualisiert" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Fehler beim Aktualisieren" });
  }
}
