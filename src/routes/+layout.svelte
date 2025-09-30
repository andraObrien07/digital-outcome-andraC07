<script>
  import "../app.scss";
  import Header from "$lib/Header.svelte";
  import { user } from "$lib/state.svelte.js";
  import { logout } from "$lib/db.js";
  import { goto } from "$app/navigation";
  import { landScape } from "$lib/state.svelte.js";
  import { onMount } from "svelte";
  let { children } = $props();
</script>

{@render children?.()}
