"use client";

import * as React from "react";
import { Ellipsis, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="w-[3.2rem] h-[3.2rem] rounded-2xl border border-gray-50 bg-white shadow transition-all hover:bg-orange-100 dark:hover:bg-slate-600 text-slate-700"
        >
          <Ellipsis className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Toggle theme</span>
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
