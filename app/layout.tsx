import { Josefin_Sans } from "next/font/google";
import "./_styles/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Wild Oasis",
    default: "Wild Oasis",
  },
  description: "A simple app using Tailwind CSS with custom colors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
