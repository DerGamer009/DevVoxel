import { prisma } from '@/lib/prisma'; // Passe den Pfad an dein Setup an
import EditForm from './EditForm';

interface Props {
  params: {
    id: string;
  };
}

export default async function EditPluginPage({ params }: Props) {
  const pluginId = Number(params.id);
  const plugin = await prisma.plugin.findUnique({
    where: { id: pluginId },
  });

  if (!plugin) {
    return <p>Plugin nicht gefunden</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Plugin bearbeiten: {plugin.title}</h1>
      <EditForm plugin={plugin} />
    </div>
  );
}
