import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Career from "@/components/section/career/carerr";
import About from "@/components/section/about/about";
import Skills from "@/components/section/skills.tsx/skills";

export const metadata: Metadata = {
  title: "About Me | Wahyu Budi Utomo",
  description:
    "Learn about Wahyu Budi Utomo, a dedicated professional passionate about [your field or specialty]. Discover my journey, expertise, and what drives me in my career and personal life.",
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <div className="page-container">
        <About />
        <Separator />
        <Skills />
        <Separator />
        <Career />
      </div>
    </main>
  );
}
