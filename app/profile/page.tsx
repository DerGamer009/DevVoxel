import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import PluginCard from "@/app/components/PluginCard";

const prisma = new PrismaClient();

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p>Du musst eingeloggt sein, um dein Profil zu sehen.</p>
        <Link href="/login" className="text-blue-600 underline mt-2">Zum Login</Link>
      </div>
    );
  }

  const plugins = await prisma.plugin.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <h1 className="text-2xl font-bold">Mein Profil</h1>
      <p className="mb-4">Eingeloggt als: <strong>{session.user.email}</strong></p>
      <h2 className="text-xl font-semibold">Meine Plugins</h2>
      {plugins.length === 0 && <p>Du hast noch keine Plugins hochgeladen.</p>}
      {plugins.map((plugin) => (
        <PluginCard key={plugin.id} plugin={plugin} />
      ))}
    </div>
  );
}
