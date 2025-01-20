<script>
  import Navbutton from "./navbutton.svelte";
</script>

<div
  class="w-full h-[80px] bg-black absolute z-10 top-0 left-0 flex items-center justify-between px-20"
>
  <div class="flex items-center">
    <div class="flex items-center">
      <p class="text-2xl text-white font-bold">HOMO</p>
      <p class="text-2xl text-orange-400 font-bold">SCIENCE</p>
    </div>
  </div>
  <div class="w-1/2 flex items-center justify-end gap-20">
    <Navbutton>BLOG</Navbutton>
    <Navbutton>LIBRARY</Navbutton>
    <Navbutton>ABOUT</Navbutton>
  </div>
</div>
