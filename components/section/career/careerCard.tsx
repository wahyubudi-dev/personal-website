import { cn } from "@/common/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface CareerCardProps {
  imageUrl: string;
  name: string;
  role: string;
  status: string;
  startDate: string;
  endDate: string;
  description: string;
  route: string;
}

export default function CareerCard({
  imageUrl,
  name,
  role,
  status,
  startDate,
  endDate,
  description,
  route,
}: CareerCardProps) {
  return (
    <Link href={route} target="_blank">
      <Card key={name}>
        <CardHeader>
          <div className="flex items-center justify-start gap-4">
            <Avatar className="w-14 h-14 p-2">
              <AvatarImage
                src={imageUrl}
                alt="company-image"
                className="object-contain"
              />
              <AvatarFallback>PT</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardTitle className="text-sm">{name}</CardTitle>
              <CardDescription className="text-xs text-slate-700 line-clamp-1">
                {role} - {status}
              </CardDescription>
              <CardDescription className="text-xs text-slate-700">
                <span>{startDate}</span> -{" "}
                <span
                  className={cn({
                    "text-green-700 font-bold":
                      endDate.toLocaleLowerCase() === "current",
                  })}
                >
                  {endDate}
                </span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-justify text-xs text-gray-600 dark:text-white line-clamp-3 hover:line-clamp-none">
            {description}
          </p>
          {/* <span className="text-xs text-sky-700 font-medium hover:underline">
              Lihat Selengkapnya
            </span> */}
        </CardContent>
      </Card>
    </Link>
  );
}
