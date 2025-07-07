import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/lib/prisma";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    return res.status(401).json({ message: "Nicht eingeloggt" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Methode nicht erlaubt" });
  }

  const form = formidable({
    uploadDir: path.join(process.cwd(), "/public/avatars"),
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ message: "Fehler beim Parsen" });

    const name = fields.name as string;
    let avatarUrl = null;

    if (files.avatar) {
      const file = Array.isArray(files.avatar) ? files.avatar[0] : files.avatar;
      const filePath = `/avatars/${path.basename(file.filepath)}`;
      avatarUrl = filePath;
    }

    try {
      const updatedUser = await prisma.user.update({
        where: { id: session.user.id },
        data: {
          name,
          ...(avatarUrl && { image: avatarUrl }),
        },
      });
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ message: "Update fehlgeschlagen" });
    }
  });
}
