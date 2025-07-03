<script>
    import { landScape } from "$lib/state.svelte.js";
</script>

<button
    class="button"
    on:click={() => {
        addLame();
        landScape.herds = [...landScape.herds, { ...newHerd }];
        newHerd.herdName = "";
    }}
>
    Save Lame
</button>
