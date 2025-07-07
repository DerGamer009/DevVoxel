import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";
import ProfileClient from "./ProfileClient";

const prisma = new PrismaClient();

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <p className="mb-4 text-lg">Du musst eingeloggt sein, um dein Profil zu sehen.</p>
        <a href="/login" className="text-blue-600 underline hover:text-blue-800">
          Zum Login
        </a>
      </div>
    );
  }

  // Plugins des Users laden
  const plugins = await prisma.plugin.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return <ProfileClient user={session.user} plugins={plugins} />;
}
