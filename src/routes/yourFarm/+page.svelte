<script>
    import Header from "$lib/Header.svelte";
    import { user } from "$lib/state.svelte.js";
    import { logout } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { landScape } from "$lib/state.svelte.js";
</script>

<Header />
<!-- <user /> -->
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

    <button
        class="button"
        on:click={() => {
            goto("/choicefarm");
        }}
    >
        <p>{landScape.nameFarm}</p>
        <!-- <p>{user.uid}</p> -->
    </button>
    <button
        class="button"
        on:click={() => {
            logout();
            goto("/create");
        }}
    >
        Create Farm
    </button>
</main>
