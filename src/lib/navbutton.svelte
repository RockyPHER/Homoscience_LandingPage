<script>
  export let route;
</script>

<a
  href={route}
  class="relative w-auto h-full flex justify-center items-center text-xl text-white font-semibold hover:underline"
  >
  <slot />
    <span class="absolute bottom-[-26px] left-0 right-0 h-[5px] bg-white rounded-t-full"></span>
</a>
