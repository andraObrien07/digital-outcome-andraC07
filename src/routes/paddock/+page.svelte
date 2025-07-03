<!-- <script>
    import Header from "$lib/Header.svelte";
    import { user } from "$lib/state.svelte.js";
    //why is the user no used??!!! shouldnt it be saving to the user
    import { logout } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { landScape } from "$lib/state.svelte.js";
</script>

//PAGE NOT NEEDED

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
    </button> -->
<!-- {#each landScape.paddocks as paddock}
        <p>
            {paddock.paddockNumber} - {paddock.paddockSize}- {paddock.paddockLandscape}-
            {paddock.lastGrazed}- {paddock.lastFertilised}- {paddock.currentPlantation}
        </p>
    {/each} -->
<!-- <p>specific paddock page</p>
</main> -->
