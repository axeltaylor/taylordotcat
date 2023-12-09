export type ProjectStatus = "wip" | "live" | "dead";

type Props = {
  status: ProjectStatus;
  tags?: string[];
  link?: string;
  children: string;
};

const getStatusColor = (status: ProjectStatus) => {
  switch (status) {
    case "live":
      return "text-not-green";
    case "wip":
      return "text-not-yellow";
    case "dead":
      return "text-not-pink";
  }
};

export function Project({ status, tags, link, children }: Props) {
  return (
    <li class="border border-not-gray">
      <a
        class="p-4 @a:box @list-item flex gap-1 justify-start items-center"
        href={link}
        target="_blank"
      >
        <span
          class={`${
            getStatusColor(status)
          } @pseudo:brackets @pseudo:bold:not-blue`}
        >
          {status}
        </span>
        <span class="flex-shrink-0">
          {children}
        </span>
        {tags && <span class="text-not-blue">|</span>}
        {tags && <span>{tags.join(", ")}</span>}
      </a>
    </li>
  );
}
