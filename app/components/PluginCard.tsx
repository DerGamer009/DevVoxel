"use client";

import Link from "next/link";
// @ts-ignore
import parseBBCode from "bbcode-to-html";
import DOMPurify from "isomorphic-dompurify"; // für Sicherheit

export default function PluginCard({ plugin }: { plugin: any }) {
  const rawHtml = parseBBCode(plugin.description || "");
  const safeHtml = DOMPurify.sanitize(rawHtml);

  return (
    <div className="border p-4 rounded w-full max-w-md">
      <h3 className="text-lg font-semibold">{plugin.title}</h3>
      <div
        className="text-sm text-gray-600"
        dangerouslySetInnerHTML={{ __html: safeHtml }}
      />
      <p className="text-xs text-gray-500 mt-2">
        Hochgeladen am{" "}
        {new Date(plugin.createdAt).toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </p>

      {plugin.fileUrl && (
        <a
          href={plugin.fileUrl}
          download
          className="inline-block mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500 text-sm"
        >
          Download
        </a>
      )}
    </div>
  );
}
