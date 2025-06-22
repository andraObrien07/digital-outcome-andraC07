<!-- <script>
    import Header from "$lib/Header.svelte";
    import { user } from "$lib/state.svelte.js";
    import { logout } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { landScape } from "$lib/state.svelte.js";

    let lames = [];
    newLame = "";
    // lames = [...lames, newLame()];

    function addLame() {}
</script>

<Header />
<main>
    <div class="box">
        <label class="label">
            Lame Cow id <input type="number" bind:value={landScape.lameCows} />
            <p>Lame cow {landScape.lameCows}</p>
        </label>
    </div>

    <button
        class="button"
        on:click={() => {
            landScape.herds = [...landScape.herds, { ...newHerd }];
            newHerd.herdName = "";
        }}
    >
        Save Lame
    </button>
    {#each landScape.lameCows as lame}
        <div class="box">
            <p>Herd:{lame.herdName}</p>
        </div>
    {/each}

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

    {#each landScape.herds as herd}
        <p>{herd.herdName} - {herd.herdSize}</p>
    {/each}  -->
<!-- </main>  -->
