import Project from "@/components/section/project/project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Wahyu Budi Utomo",
  description:
    "Explore the diverse projects by Wahyu Budi Utomo, showcasing innovation, expertise, and a passion for excellence. Discover how these projects highlight my skills and commitment to delivering top-notch solutions in Software Engineer",
};

export default function ProjectPage() {
  return (
    <main className="flex flex-col items-center py-16 gap-6 px-8 lg:px-0">
      <div className="max-w-[50rem] w-full">
        <Project />
      </div>
    </main>
  );
}
