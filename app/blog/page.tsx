import { BlogPage } from "@/components/BlogPage";
import blogPosts from "@/data/blog-posts.json";

export const metadata = {
  title: "Blog — Blossom Rocket",
  description:
    "Brand strategy, design systems, and print production notes from the Blossom Rocket studio.",
};

export default function Page() {
  return <BlogPage posts={blogPosts} />;
}
