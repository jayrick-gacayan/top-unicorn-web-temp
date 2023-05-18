import { Roboto } from "next/font/google";

import { TopHeaderNavigation } from "./sections/top_header_navigation";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  fallback: ["Arial", "Helvetica", "system-ui", "sans-serif"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <TopHeaderNavigation />
        <div className="h-screen w-screen overflow-auto">{children}</div>
      </body>
    </html>
  );
}
