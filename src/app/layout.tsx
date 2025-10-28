import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/i18n/I18nContext";

export const metadata: Metadata = {
  title: "Crop Knowledge Portal",
  description: "Multilingual agriculture knowledge bento portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
