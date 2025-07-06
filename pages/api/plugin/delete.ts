import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Plugin ID fehlt" });
  }

  try {
    await prisma.plugin.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ message: "Plugin gelöscht" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Fehler beim Löschen" });
  }
}
