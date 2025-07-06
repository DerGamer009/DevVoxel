import "./globals.css";
import SessionProviderWrapper from "./components/SessionProviderWrapper";
import Navbar from "@/app/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <SessionProviderWrapper>
          <Navbar />
          <main className="max-w-5xl mx-auto p-4">{children}</main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
