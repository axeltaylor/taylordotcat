import { HaxIcon } from "./HaxIcon.tsx";
import { Section } from "./Section.tsx";
import { SocialIcons } from "./SocialIcons.tsx";

export function Footer() {
  return (
    <Section>
      <div class="w-full flex flex-col items-center gap-2">
        <a href="" class="h-14 w-14">
          <HaxIcon />
        </a>
        <span class="text-not-pink">no 🍪, no 🛰️, no ads</span>
        <span class="text-not-green">Made with 💚 from Mataró</span>
        <SocialIcons />
      </div>
    </Section>
  );
}
