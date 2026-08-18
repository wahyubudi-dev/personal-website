"use client";

import * as React from "react";
import { Ellipsis } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { collapseMenuLinks } from "@/common/constant/nav";

export function CollapseNavigation() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="dock-icon-btn">
          <Ellipsis className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {collapseMenuLinks.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            download={item.route === "/file/cv.pdf"}
          >
            <DropdownMenuItem className="capitalize">
              {item.name}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
