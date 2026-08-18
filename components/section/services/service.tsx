import { Waves } from "lucide-react";
import ServiceList from "./serviceList";
import HeaderTitle from "@/components/global/header/header-title";
import MotionSection from "@/components/elements/motionSection";

export default function Service() {
  return (
    <MotionSection className="py-6 flex flex-col gap-5">
      <HeaderTitle
        name="Services"
        descriptions="The services i&#39;m proficient are"
        leadingIcon={Waves}
      />
      <ServiceList />
    </MotionSection>
  );
}
