import { Metadata } from "next";
import Blog from "@/components/section/blog/blog";

export const metadata: Metadata = {
  title: "Blog | Wahyu Budi Utomo",
  description:
    "Explore the world of programming with me. Discover insights, tips, and experiences in coding, development best practices, and the latest industry trends",
};

export default function BlogPage() {
  return (
    <main className="page-shell">
      <div className="page-container">
        <Blog />
      </div>
    </main>
  );
}
