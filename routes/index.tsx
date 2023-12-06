import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Section } from "../components/Section.tsx";
import { Avatar } from "../components/Avatar.tsx";
import { SocialIcons } from "../components/SocialIcons.tsx";
import { SectionTitle } from "../components/SectionTitle.tsx";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
