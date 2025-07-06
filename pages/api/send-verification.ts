import type { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "@/lib/mailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, token } = req.body;

  if (!email || !token) {
    return res.status(400).json({ message: "Fehlende Felder" });
  }

  try {
    const verificationLink = `https://deine-domain.de/verify?token=${token}`;

    await sendMail({
      to: email,
      subject: "Bitte bestätige deine E-Mail",
      html: `
        <p>Hi!</p>
        <p>Klicke auf den folgenden Link, um deine E-Mail zu bestätigen:</p>
        <a href="${verificationLink}">E-Mail bestätigen</a>
      `,
    });

    res.status(200).json({ message: "Mail gesendet" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Fehler beim Senden" });
  }
}
