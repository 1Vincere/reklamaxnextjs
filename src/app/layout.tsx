import { Metadata } from "next";
import Head from "next/head";
import "../styles/globals.css";

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
      <Head>
        <meta name="google-site-verification" content="eodzFSWKScKCjRE73LMdVNLMm0VRiYF5tvTgWLviW-g" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
