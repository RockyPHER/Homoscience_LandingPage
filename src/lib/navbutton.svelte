<script>
  export let route;
</script>

<a
  href={route}
  class="w-auto h-full flex justify-center items-center text-xl text-white font-semibold hover:underline"
>
  <slot />
</a>
