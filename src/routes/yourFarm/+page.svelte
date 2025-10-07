<script>
    import Header from "$lib/Header.svelte";
    import { user } from "$lib/state.svelte.js";
    import { logout } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { landScape } from "$lib/state.svelte.js";
    import CreateNav from "$lib/CreateNav.svelte";
    import UserManagement from "$lib/UserManagement.svelte";
    import { getfarms } from "$lib/db.js";
</script>

<Header />
<UserManagement />
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

    {#if user.uid}
        <button
            class="button"
            on:click={() => {
                goto("/choicefarm");
            }}
        >
            <p>{landScape.nameFarm}</p>
            <!-- <p>{user.uid}</p> -->
        </button>
    {/if}
    <CreateNav />
</main>
