import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "Ungültige ID" });
  }

  if (req.method === "PUT") {
    const { title, description } = req.body;

    try {
      const plugin = await prisma.plugin.update({
        where: { id: Number(id) },
        data: { title, description },
      });
      return res.status(200).json(plugin);
    } catch (error) {
      return res.status(500).json({ message: "Update fehlgeschlagen" });
    }
  }

  // Optional: GET-Methode, falls gewünscht
  if (req.method === "GET") {
    try {
      const plugin = await prisma.plugin.findUnique({
        where: { id: Number(id) },
      });
      if (!plugin) return res.status(404).json({ message: "Plugin nicht gefunden" });
      return res.status(200).json(plugin);
    } catch (error) {
      return res.status(500).json({ message: "Fehler beim Abrufen" });
    }
  }

  return res.status(405).json({ message: "Methode nicht erlaubt" });
}
