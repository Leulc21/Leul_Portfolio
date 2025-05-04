import { constructMetadata } from "@/utils";
import { VariantProvider } from "@/utils/hooks";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body className={poppins.className} suppressHydrationWarning>
        <VariantProvider>{children}</VariantProvider>
      </body>
    </html>
  );
}
