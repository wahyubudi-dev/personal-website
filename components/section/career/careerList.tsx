import { experiencesData } from "@/common/constant/data";
import CareerCard from "./careerCard";

export default function CareerList() {
  return (
    <section className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiencesData.map((item, index) => (
        <CareerCard {...item} key={index} />
      ))}
    </section>
  );
}
