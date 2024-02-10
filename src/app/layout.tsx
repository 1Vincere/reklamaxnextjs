import { Metadata } from "next";
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Reklamax",
  description: "Reklamax",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body>
        {children}
      </body>
    </html>
  );
}
