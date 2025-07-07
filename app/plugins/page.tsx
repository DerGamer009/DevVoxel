import { PrismaClient } from "@prisma/client";
import PluginsClient from "./PluginsClient";

const prisma = new PrismaClient();

export default async function PluginsPage() {
  const plugins = await prisma.plugin.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: true },
  });

  return <PluginsClient plugins={plugins} />;
}
