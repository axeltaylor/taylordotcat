import {
  Github,
  Linkedin,
  Twitch,
  Twitter,
  Youtube,
} from "https://esm.sh/lucide-preact@0.294.0";

export function SocialIcons() {
  return (
    <ul class="flex flex-row flex-wrap gap-3">
      <li>
        <a
          target="_blank"
          class="text-not-blue hover:text-twitter active:text-twitter"
          href="https://x.com/taylordotcat"
        >
          <Twitter strokeWidth={1} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          class="text-not-blue hover:text-github active:text-github"
          href="https://github.com/axeltaylor"
        >
          <Github strokeWidth={1} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          class="text-not-blue hover:text-twitch active:text-twitch"
          href="https://twitch.tv/taylordotcat"
        >
          <Twitch strokeWidth={1} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          class="text-not-blue hover:text-youtube active:text-youtube"
          href="https://youtube.com/@taylordotcat"
        >
          <Youtube strokeWidth={1} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          class="text-not-blue hover:text-linkedin active:text-linkedin"
          href="https://linkedin.com/in/axeltaylor"
        >
          <Linkedin strokeWidth={1} />
        </a>
      </li>
    </ul>
  );
}
