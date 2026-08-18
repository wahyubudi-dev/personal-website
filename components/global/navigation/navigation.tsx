"use client";

import { motion, useAnimation } from "framer-motion";
import { ElementRef, useEffect, useRef, useState } from "react";
import { TooltipProvider } from "../../ui/tooltip";
import { directLinks, features, links } from "@/common/constant/nav";

import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";
import { Separator } from "../../ui/separator";

import NavigationItem from "./navigationItem";
import { ModeToggle } from "./modeToggle";
import { CollapseNavigation } from "./collapseNavigation";
import { cn } from "@/common/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 425px)");
  const controls = useAnimation();
  const directLinkRef = useRef<ElementRef<"div">>(null);
  const featuresRef = useRef<ElementRef<"div">>(null);
  const separatorDirectLinkRef = useRef<ElementRef<"div">>(null);
  const separatorFeaturesLinkRef = useRef<ElementRef<"div">>(null);
  const modeToggleRef = useRef<ElementRef<"div">>(null);
  const collapseNavigationRef = useRef<ElementRef<"div">>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        controls.start({ opacity: 0, y: 50 });
      } else {
        // Scrolling up
        controls.start({ opacity: 1, y: 0 });
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, prevScrollY]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls, isMobile]);

  const collapse = () => {
    if (
      directLinkRef.current &&
      featuresRef.current &&
      separatorDirectLinkRef.current &&
      separatorFeaturesLinkRef.current &&
      modeToggleRef.current &&
      collapseNavigationRef.current
    ) {
      setIsCollapsed(true);
      setIsResetting(true);

      directLinkRef.current.style.setProperty("display", "none");
      featuresRef.current.style.setProperty("display", "none");
      separatorDirectLinkRef.current.style.setProperty("display", "none");
      separatorFeaturesLinkRef.current.style.setProperty("display", "none");
      modeToggleRef.current.style.setProperty("display", "none");
      collapseNavigationRef.current.style.setProperty("display", "flex");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const resetWidth = () => {
    if (
      directLinkRef.current &&
      featuresRef.current &&
      separatorDirectLinkRef.current &&
      separatorFeaturesLinkRef.current &&
      modeToggleRef.current &&
      collapseNavigationRef.current
    ) {
      setIsCollapsed(false);
      setIsResetting(true);

      directLinkRef.current.style.setProperty("display", "flex");
      separatorDirectLinkRef.current.style.setProperty("display", "flex");
      featuresRef.current.style.setProperty("display", "flex");
      separatorFeaturesLinkRef.current.style.setProperty("display", "flex");
      modeToggleRef.current.style.setProperty("display", "flex");
      collapseNavigationRef.current.style.setProperty("display", "none");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  return (
    <motion.div
      className={cn(
        "flex fixed px-3.5 py-3 left-1/2 -translate-x-1/2 bottom-6 rounded-3xl border border-border/60 bg-card/80 shadow-soft-lg backdrop-blur-md",
        pathname === "/chat-room" && "hidden"
      )}
      initial={{ y: 50, x: "-50%", opacity: 0 }}
      animate={controls}
    >
      <div className="flex items-center justify-center gap-3">
        <TooltipProvider delayDuration={0}>
          {links.map((item, index) => (
            <NavigationItem {...item} pathname={pathname} key={index} />
          ))}
          <Separator orientation="vertical" ref={separatorFeaturesLinkRef} />
          <div className="flex gap-3" ref={featuresRef}>
            {features.map((item, index) => (
              <NavigationItem {...item} pathname={pathname} key={index} />
            ))}
          </div>
          <Separator orientation="vertical" ref={separatorDirectLinkRef} />
          <div className="flex gap-3" ref={directLinkRef}>
            {directLinks.map((item, index) => (
              <NavigationItem {...item} pathname={pathname} key={index} />
            ))}
          </div>
          <div ref={modeToggleRef}>
            <ModeToggle />
          </div>
          <div ref={collapseNavigationRef}>
            <CollapseNavigation />
          </div>
        </TooltipProvider>
      </div>
    </motion.div>
  );
}
