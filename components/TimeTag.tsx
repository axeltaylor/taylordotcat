import { format } from "$std/datetime/format.ts";

type Props = {
  date: Date;
};

export function TimeTag({ date }: Props) {
  const formatedDate = format(date, "dd.MM.yyyy");
  return (
    <time
      class="bg-not-yellow text-black font-bold rounded px-2"
      datetime={date?.toISOString()}
    >
      {formatedDate}
    </time>
  );
}
