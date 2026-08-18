import { skillsData } from "@/common/constant/data";
import MarqueeElement from "@/components/elements/marque";

export default function SkillList() {
  return (
    <section className="pt-3">
      {Array.from({ length: 2 }, (_, index) => {
        const slider = [...skillsData].sort(() => Math.random() - 0.5);
        return (
          <MarqueeElement
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            {slider.map((item, index) => (
              <div className="px-2" key={index}>
                <div className="flex w-full gap-2 items-center rounded-full px-4 py-2 shadow-[0_3px_10px_rgb(0,0,0,0.15)] dark:shadow-neutral-800 dark:border-[1px] dark:border-gray-800">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  <div className="whitespace-nowrap text-sm">{item.name}</div>
                </div>
              </div>
            ))}
          </MarqueeElement>
        );
      })}
    </section>
  );
}
