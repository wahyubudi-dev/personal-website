import { projectsData } from "@/common/constant/data";
import ProjectCard from "./projectCard";

export default function ProjectList() {
  return (
    <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectsData.map((item, index) => (
        <ProjectCard {...item} key={index} />
      ))}
    </div>
  );
}
