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
          {/* <AuroraBackground> */}
          {children}
          {/* </AuroraBackground> */}
          <Navigation />
          {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
          <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" /> */}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
