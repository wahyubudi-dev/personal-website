"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  name: string;
  createdAt: string;
  route: string;
  thumbnailUrl: string;
  description: string;
}

// export default function ProjectCard({
//   name,
//   createdAt,
//   route,
//   thumbnailUrl,
//   description,
// }: ProjectCardProps) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Link
//       href={route}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="bg-slate-100 dark:bg-stone-100 rounded-2xl pt-4 border border-white shadow-md hover:shadow-lg dark:shadow-gray-500 text-sm max-h-[500px] overflow-hidden transition-all duration-500"
//     >
//       <motion.div
//         initial={{ display: "none", height: 0, opacity: 0 }}
//         animate={{
//           display: isHovered ? "block" : "none",
//           height: isHovered ? "auto" : 0,
//           opacity: isHovered ? 1 : 0,
//         }}
//         transition={{ duration: 0.3 }}
//         className="pl-6"
//       >
//         <div className="flex items-center font-medium pb-1 text-[16px]">
//           <p className="text-black">{name}</p>
//           <Dot className="text-slate-500" />
//           <p className="text-sm text-slate-600">{createdAt}</p>
//         </div>
//         <p className="line-clamp-2 text-slate-600">{description}</p>
//       </motion.div>

//       <Image
//         src={thumbnailUrl}
//         alt={name}
//         width={500}
//         height={500}
//         quality={75}
//         loading={"lazy"}
//         placeholder={"blur"}
//         blurDataURL={thumbnailUrl}
//       />
//     </Link>
//   );
// }

export default function ProjectCard({
  name,
  createdAt,
  route,
  thumbnailUrl,
  description,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={route}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="max-h-[450px] overflow-hidden transition-all duration-500">
        <motion.div
          initial={{ display: "none", height: 0, opacity: 0 }}
          animate={{
            display: isHovered ? "block" : "none",
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="font-medium text-[16px] text-justify">
                {name}
              </CardTitle>
              <Dot className="text-slate-500" />
              <CardDescription className="line-clamp-3 text-xs">
                {createdAt}
              </CardDescription>
            </div>
            <CardDescription className="line-clamp-3 text-xs text-justify">
              {description}
            </CardDescription>
          </CardHeader>
        </motion.div>
        <CardContent className="px-0">
          <Image
            src={thumbnailUrl}
            alt={name}
            width={600}
            height={600}
            quality={75}
            loading={"lazy"}
            placeholder={"blur"}
            blurDataURL={thumbnailUrl}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
