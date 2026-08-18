import Marquee from "react-fast-marquee";

interface MarqueeProps {
  direction?: "left" | "right" | "up";
  children: React.ReactNode;
  withPadding?: boolean;
}

export default function MarqueeElement({
  children,
  direction = "left",
  withPadding = true,
}: MarqueeProps) {
  return (
    <Marquee
      direction={direction}
      speed={25}
      className={withPadding ? "py-2" : ""}
    >
      {children}
    </Marquee>
  );
}
