export function Menu() {
  return (
    <div class="@menu">
      <label
        for="burger-menu"
        class="block h-6 w-6 relative md:hidden cursor-pointer"
      >
        <span></span>
        <span></span>
      </label>
      <div class="menu-items">
        <ul>
          <li class="mt-5 md:hidden">menu_</li>
          <li>
            <a href="/"></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
