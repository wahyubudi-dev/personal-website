import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/global/navigation/navigation";
import { Toaster } from "@/components/ui/sonner";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wahyu Budi Utomo | Personal Website",
  description:
    "All about me, such as programming tips, carrer, project blog, collaboration and etc in software engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={figtree.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Navigation />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
