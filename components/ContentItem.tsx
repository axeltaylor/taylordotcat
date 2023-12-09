import { TimeTag } from "./TimeTag.tsx";

type Props = {
  title: string;
  cover?: string;
  url: string;
  creationDate?: Date;
  tags?: string[];
};

export function ContentItem(
  { title, cover, url, creationDate, tags }: Props,
) {
  const tagline = tags?.join(", ");
  return (
    <article class="group relative hover:scale-105 transition-transform ease-in-out duration-300 overflow-hidden rounded">
      <a href={url} class="@a:box">
        <img
          alt={title}
          src={cover}
          class=""
          height={635}
          width={952}
        />
        <div class="absolute bottom-0 left-0 w-full p-2">
          <div class="p-4 flex flex-col backdrop-blur-md bg-black/80 rounded">
            {/* <!-- <span class="@pseudo:brackets @pseudo:bold:not-blue">{type}</span> --> */}
            <h1 class="text-xl">{title}</h1>
            <p class="m-0 text-xs mt-1 gap-3 flex">
              <TimeTag date={creationDate || new Date()} />
              {tagline && <span class="@bold:not-blue">|</span>}
              {tagline && <span>{tagline}</span>}
            </p>
          </div>
        </div>
      </a>
    </article>
  );
}
