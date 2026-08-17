import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";

const getPostsByCategory = (
  posts: CollectionEntry<"blog">[],
  category: "World Thesis" | "Reading Lists" | "Product Reviews"
) =>
  getSortedPosts(
    posts.filter(post => post.data.category === category)
  );

export default getPostsByCategory;


