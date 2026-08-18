"use client";

import { blogsData } from "@/common/constant/data";
import BlogCard from "./blogCard";

export default function BlogList() {
  return (
    <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogsData.map((item, index) => (
        <BlogCard {...item} key={index} isNew={index === 0} />
      ))}
    </div>
  );
}
