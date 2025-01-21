<script>
  import Navbutton from "./navbutton.svelte";
  import Logo from "./logo.svelte";
</script>

<nav
  class="w-full h-[80px] bg-black absolute z-10 top-0 left-0 flex items-center justify-between px-20"
>
  <div class="flex items-center">
    <a class="flex items-center" href="/">
      <div class="flex items-center gap-2">
        <Logo colorComponent="#FFFFFF" size={40} />
        <div class="flex items-center">
          <p class="text-2xl text-white font-bold">HOMO</p>
          <p class="text-2xl text-orange-400 font-bold">SCIENCE</p>
        </div>
      </div>
    </a>
  </div>
  <div class="w-1/2 flex items-center justify-end gap-20">
    <Navbutton route="/blog">BLOG</Navbutton>
    <Navbutton route="/library">LIBRARY</Navbutton>
    <Navbutton route="/about">ABOUT</Navbutton>
  </div>
</nav>
