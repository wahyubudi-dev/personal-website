import { aboutText } from "@/common/constant/about";

export default function AboutDetail() {
  return (
    <div className="py-5 flex flex-col gap-5 text-justify">
      <p>
        I&apos;m <b>Wahyu</b> Budi Utomo, a seasoned coder on a mission to
        engineer sleek and efficient solutions. My expertise lies in JavaScript
        and TypeScript, complemented by a keen understanding of various frontend
        tools and frameworks. Currently living in Jakarta, Indonesia 🇮🇩.
      </p>
      {aboutText.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
