import { defineRoute } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Section } from "../../components/Section.tsx";
import { SectionTitle } from "../../components/SectionTitle.tsx";
import { TimeTag } from "../../components/TimeTag.tsx";
import { findAndReplaceAssetUrl, getPostBySlug } from "../../libs/ghost.ts";

export default defineRoute(async (req, ctx) => {
  const { slug } = ctx.params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return ctx.renderNotFound();
  }
  return (
    <>
      <Head>
        <title>{post.title} | taylordotcat</title>
      </Head>
      <Section>
        {post.feature_image && (
          <img
            src={findAndReplaceAssetUrl(post.feature_image)}
            alt={post.title}
            height={635}
            width={952}
            class="rounded"
          />
        )}
        <p class="m-0 text-xs gap-2 flex flex-row">
          {post.tags && (
            <>
              <span>{post.tags.map((t) => t.name!).join(", ")}</span>
              <span class="text-not-blue">|</span>
            </>
          )}
          <TimeTag date={new Date(post.published_at! ?? new Date())} />
        </p>
        <SectionTitle>{post.title}</SectionTitle>
        <div
          class="@rich-content prose prose-invert max-w-full"
          dangerouslySetInnerHTML={{
            __html: findAndReplaceAssetUrl(post.html!),
          }}
        >
        </div>
      </Section>
    </>
  );
});
