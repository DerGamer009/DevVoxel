import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const plugins = await prisma.plugin.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });
  res.status(200).json(plugins);
}
