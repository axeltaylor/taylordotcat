import { Terminal } from "https://esm.sh/lucide-preact@0.294.0";
import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

export function SectionTitle({ children }: Props) {
  return (
    <div class="flex flex-row items-center space-x-2 w-full">
      <Terminal
        size={18}
        strokeWidth="3"
        class="text-not-blue text-opacity-50"
      />
      <h1 class="text-not-blue font-black text-xl lowercase">
        {children}
      </h1>
    </div>
  );
}
