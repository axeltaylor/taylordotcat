import { Section } from "../components/Section.tsx";
import { Avatar } from "../components/Avatar.tsx";
import { SocialIcons } from "../components/SocialIcons.tsx";
import { SectionTitle } from "../components/SectionTitle.tsx";
import { ContentItem } from "../components/ContentItem.tsx";
import { findAndReplaceAssetUrl, getPosts, type Post } from "../libs/ghost.ts";
import { defineRoute } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Project, type ProjectStatus } from "../components/Project.tsx";
import projects from "../static/data/projects.json" with { type: "json" };

export default defineRoute(async (req, ctx) => {
  const posts = await getPosts();
  return (
    <div>
      <Head>
        <title>Axel Taylor — Software Engineer. Content Creator.</title>
      </Head>
      <Section>
        <div class="flex flex-col md:flex-row gap-4 md:gap-7 justify-start items-center text-center md:text-left">
          <div class="flex-shrink-0">
            <Avatar />
          </div>
          <div class="flex flex-col">
            <h1 class="text-3xl font-bold">Axel Taylor</h1>
            <span class="text-2xl mb-2">Software Engineer</span>
            <div class="w-full flex justify-center md:justify-start">
              <SocialIcons />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SectionTitle>Intro</SectionTitle>
        <div>
          <p>
            Hey hey! 👋 Welcome to my little corner on the internet! Here,
            you'll find my adventures in 🖥️ software development, 🤖 artificial
            intelligence, and 🕶️ mixed reality.
          </p>
          <div class="@content:callout">
            <p>
              👉 If you need to get in touch with me, please do so via{"  "}
              <a href="https://x.com/taylordotcat">𝕏</a> 📬
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <SectionTitle>Content</SectionTitle>
        <div class="flex flex-col md:grid md:grid-cols-2 gap-5">
          {posts.map((post) => (
            <ContentItem
              title={post.title!}
              creationDate={new Date(post.published_at!)}
              tags={post.tags?.map((t) => t.name!) ?? []}
              url={`/blog/${post.slug}`}
              cover={findAndReplaceAssetUrl(post.feature_image!)}
            />
          ))}
        </div>
      </Section>
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <ul class="flex flex-col gap-5">
          {projects.map((project) => (
            <Project
              status={project.status as ProjectStatus}
              tags={project.tags}
              link={project.url}
            >
              {project.title}
            </Project>
          ))}
        </ul>
      </Section>
    </div>
  );
});
