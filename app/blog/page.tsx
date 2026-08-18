import { Metadata } from "next";
import Blog from "@/components/section/blog/blog";

export const metadata: Metadata = {
  title: "Blog | Wahyu Budi Utomo",
  description:
    "Explore the world of programming with me. Discover insights, tips, and experiences in coding, development best practices, and the latest industry trends",
};

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center py-16 gap-6 px-8 lg:px-0">
      <div className="max-w-[50rem] w-full">
        <Blog />
      </div>
    </main>
  );
}
