<script lang="ts">
  import Footer from "$lib/footer.svelte";
import Navbar from "../lib/navbar.svelte";

  let { children } = $props();
</script>

<Navbar />

{@render children()}

<Footer />