import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogCardProps {
  name: string;
  createdAt: string;
  route: string;
  thumbnailUrl: string;
  description: string;
  isNew?: boolean;
}

export default function BlogCard({
  name,
  createdAt,
  route,
  thumbnailUrl,
  description,
  isNew,
}: BlogCardProps) {
  return (
    <Link href={route}>
      <Card className="max-h-[450px] overflow-hidden transition-all duration-500">
        <CardHeader className="space-y-2.5">
          <CardTitle className="font-semibold transition-all hover:underline text-lg line-clamp-2 leading-6 text-justify">
            {name}
          </CardTitle>
          <div className="flex items-center gap-2">
            <CardDescription className="line-clamp-3 text-xs">
              {createdAt}
            </CardDescription>
            {isNew && (
              <Badge className="h-4 text-[10px] text-white bg-green-600 hover:bg-green-800">
                New
              </Badge>
            )}
          </div>
          <CardDescription className="line-clamp-3 text-xs text-justify">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Image
            src={thumbnailUrl}
            alt={name}
            width={500}
            height={500}
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
