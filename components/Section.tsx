import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

export function Section({ children }: Props) {
  return (
    <div class="Section md:container mx-auto flex flex-col w-full my-6 px-6 md:my-8 md:px-8 gap-5">
      {children}
    </div>
  );
}
