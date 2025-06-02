<script>
    import { user } from "$lib/state.svelte.js";
    import { goto } from "$app/navigation";
    import Header from "$lib/Header.svelte";
    import { logout } from "$lib/db.js";
</script>

<Header />
<p>{user.farm.nameFarm}</p>

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
            goto("/herds");
        }}
    >
        <p>Herd</p>
    </button>
    <button
        class="button"
        on:click={() => {
            goto("/paddock");
        }}
    >
        <p>Paddocks</p>
    </button>

    <button
        class="button"
        on:click={() => {
            goto("/fert");
        }}
    >
        <p>Fert</p>
    </button>

    <h1>{user.farm.paddockNumber}</h1>
</main>
