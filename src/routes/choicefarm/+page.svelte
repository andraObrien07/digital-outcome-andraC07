<script>
    import { user } from "$lib/state.svelte.js";
    import { goto } from "$app/navigation";
    import Header from "$lib/Header.svelte";
    import { logout } from "$lib/db.js";
    import { landScape } from "$lib/state.svelte.js";
    // function showHerds() {
    //     landScape.herds.forEach((herd) => {
    //         {
    //             herd.herdName;
    //         }
    //     });
    // }
    let herdsVisible = false;
    let paddocksVisible = false;
</script>

<Header />
<p>{landScape.nameFarm}</p>

<main>
    {#if herdsVisible}
        {#each landScape.herds as herd}
            <button
                class="button"
                on:click={() => {
                    goto("/herds");
                }}
            >
                <p>{herd.herdName}</p>
                <!-- <p>{herd.herdName} - {herd.herdSize}</p> -->
            </button>
        {/each}
    {/if}

    <button
        class="button"
        on:click={() => {
            herdsVisible = !herdsVisible;
        }}
    >
        <p>Herd</p>
    </button>

    {#if paddocksVisible}
        {#each landScape.paddocks as paddock}
            <button
                class="button"
                on:click={() => {
                    goto("/paddock");
                }}
            >
                <p>{paddock.paddockNumber}</p>
            </button>
        {/each}
    {/if}

    <button
        class="button"
        on:click={() => {
            paddocksVisible = !paddocksVisible;
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
