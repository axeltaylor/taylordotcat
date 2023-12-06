import GhostContentAPI from "https://esm.sh/@tryghost/content-api@1.11.20";
export type { PostOrPage as Post } from "https://esm.sh/@tryghost/content-api@1.11.20";

// Create API instance with site credentials
const ghostUrl = Deno.env.get("GHOST_URL");
const ghostKey = Deno.env.get("GHOST_KEY");
const ghostReplaceStaticUrl = Deno.env.get("GHOST_REPLACE_STATIC_URL");
const ghostStaticUrl = Deno.env.get("GHOST_STATIC_URL");

if (!ghostUrl || !ghostKey || !ghostReplaceStaticUrl || !ghostStaticUrl) {
  throw new Error("GHOST_URL and GHOST_KEY must be set in .env");
}

export const ghostClient = new GhostContentAPI({
  url: ghostUrl,
  key: ghostKey,
  version: "v5.0",
});

export const findAndReplaceAssetUrl = (original: string): string => {
  return original.replaceAll(
    ghostReplaceStaticUrl,
    ghostStaticUrl,
  );
};
