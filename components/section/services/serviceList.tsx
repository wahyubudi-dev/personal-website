import { servicesData } from "@/common/constant/data";
import ServiceCard from "./serviceCard";

export default function ServiceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {servicesData.map((item) => (
        <ServiceCard {...item} key={item.name} />
      ))}
    </div>
  );
}
