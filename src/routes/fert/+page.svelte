<script>
    import Header from "$lib/Header.svelte";
    import { user } from "$lib/state.svelte.js";
    import { logout } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { landScapes } from "$lib/state.svelte.js";
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
</main>
