import { HaxIcon } from "./HaxIcon.tsx";
import { Menu } from "./Menu.tsx";

export function Header() {
  return (
    <div class="@header">
      <input
        type="checkbox"
        class="hidden peer"
        id="burger-menu"
        name="burger-menu"
      />
      <header class="w-full z-10 h-12 fixed bg-black/70 backdrop-blur-md top-0 peer-checked:h-full md:peer-checked:h-12 transition-[height] ease-in-out duration-300">
        <div class="md:container mx-auto flex flex-col w-full px-6 md:px-8 relative">
          <nav class="flex h-12 flex-row gap-7 justify-between items-center">
            <a class="flex flex-row gap-3 justify-start items-center" href="/">
              <span class="w-7 h-7">
                <HaxIcon />
              </span>
              <span class="font-bold text-xl before:content-['/'] before:mr-2 before:text-not-blue">
                taylordotcat
              </span>
            </a>
            <Menu />
          </nav>
        </div>
      </header>
    </div>
  );
}
