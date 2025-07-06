import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";

export const config = {
  api: {
    bodyParser: false,
  },
};

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Nicht eingeloggt" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Methode nicht erlaubt" });
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const form = formidable({ multiples: true, uploadDir, keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Fehler beim Parsen" });
    }

    try {
      const pluginFile = files.pluginFile?.[0] || files.pluginFile;
      const iconFile = files.iconFile?.[0] || files.iconFile;

      const pluginPath = pluginFile ? `/uploads/${path.basename(pluginFile.filepath)}` : "";
      const iconPath = iconFile ? `/uploads/${path.basename(iconFile.filepath)}` : "";

      await prisma.plugin.create({
        data: {
          title: String(fields.title),
          version: String(fields.version),
          tagline: String(fields.tagline),
          category: String(fields.category),
          price: parseFloat(fields.price as string),
          description: String(fields.description),
          fileUrl: pluginPath,
          iconUrl: iconPath,
          discordId: fields.discordId ? String(fields.discordId) : null,
          bStatsId: fields.bStatsId ? String(fields.bStatsId) : null,
          sourceLink: fields.sourceLink ? String(fields.sourceLink) : null,
          donationLink: fields.donationLink ? String(fields.donationLink) : null,
          requiredDeps: fields.requiredDeps ? String(fields.requiredDeps) : null,
          optionalDeps: fields.optionalDeps ? String(fields.optionalDeps) : null,
          languages: fields.languages ? String(fields.languages) : null,
          userId: Number(fields.userId),
        },
      });

      res.status(200).json({ message: "Erfolgreich hochgeladen!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Fehler beim Speichern in DB" });
    }
  });
}
