<script>
    import Header from "$lib/Header.svelte";
    import { user } from "$lib/state.svelte.js";
    import { logout } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { landScape } from "$lib/state.svelte.js";
</script>

<Header />
<main>
    <button
        class="button"
        on:click={() => {
            logout();
            goto("/");
        }}
    >
        logout
    </button>
    <p>specific herds page</p>
    <!-- 
    {#each landScape.herds as herd}
        <p>{herd.herdName} - {herd.herdSize}</p>
    {/each}  -->
</main>
