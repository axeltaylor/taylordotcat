import { PostOrPage } from "https://esm.sh/@tryghost/content-api@1.11.20?dts";
export type { PostOrPage as Post } from "https://esm.sh/@tryghost/content-api@1.11.20?dts";

// Create API instance with site credentials
const ghostUrl = Deno.env.get("GHOST_URL");
const ghostKey = Deno.env.get("GHOST_KEY");
const ghostReplaceStaticUrl = Deno.env.get("GHOST_REPLACE_STATIC_URL");
const ghostStaticUrl = Deno.env.get("GHOST_STATIC_URL");

if (!ghostUrl || !ghostKey || !ghostReplaceStaticUrl || !ghostStaticUrl) {
  throw new Error("GHOST_URL and GHOST_KEY must be set in .env");
}

const apiUrl = `${ghostUrl}/ghost/api/v3/content`;

export const getPosts = async () => {
  const response = await fetch(
    `${apiUrl}/posts/?key=${ghostKey}&include=tags&limit=all`,
  );
  const data = await response.json() as { posts: PostOrPage[] };
  return data.posts || [];
};

export const getPostBySlug = async (slug: string) => {
  const response = await fetch(
    `${apiUrl}/posts/slug/${slug}/?key=${ghostKey}&include=tags`,
  );
  const data = await response.json() as { posts: PostOrPage[]; errors: [] };
  return data?.posts?.[0] ?? null;
};

export const findAndReplaceAssetUrl = (original: string): string => {
  return original.replaceAll(
    ghostReplaceStaticUrl,
    ghostStaticUrl,
  );
};
