import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const uploadDir = path.join(process.cwd(), "/public/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "File parsing error" });
    }

    const { name, description, userId } = fields;
    const file = files.file?.[0];

    if (!name || !description || !userId || !file) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // ✅ Dateiendung prüfen
    const ext = path.extname(file.originalFilename || "").toLowerCase();
    if (ext !== ".jar" && ext !== ".zip") {
      // Datei sofort löschen, wenn nicht erlaubt
      fs.unlinkSync(file.filepath);
      return res.status(400).json({ message: "Nur .jar und .zip Dateien erlaubt" });
    }

    const relativePath = `/uploads/${path.basename(file.filepath)}`;

    try {
      await prisma.plugin.create({
        data: {
          name: String(name),
          description: String(description),
          userId: Number(userId),
          file: relativePath,
        },
      });

      res.status(201).json({ message: "Plugin hochgeladen" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Datenbankfehler" });
    }
  });
}
