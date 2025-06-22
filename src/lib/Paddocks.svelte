<script>
    export let paddocksVisible = false;
    export let selectedPaddock = null;
    import { landScape } from "$lib/state.svelte.js";
</script>

{#if paddocksVisible}
    {#each landScape.paddocks as paddock}
        <button
            class="button"
            on:click={() => {
                selectedPaddock = paddock; // set the selected herd
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
        selectedPaddock = null; // reset selection if toggling off
    }}
>
    <p>Paddocks</p>
</button>
<!-- Show herd info after clicking -->
{#if selectedPaddock}
    <div class="box">
        <p>
            Paddock Number:
            {selectedPaddock.paddockNumber}
        </p>
        <p>Paddock Size: {selectedPaddock.paddockSize}</p>
        <p>
            Paddock Landscape :
            {selectedPaddock.paddockLandscape}
        </p>
        <p>Last Grazed:{selectedPaddock.lastGrazed}</p>
        <p>Last Fertilised:{selectedPaddock.lastFertilised}</p>
        <p>Current Plantation:{selectedPaddock.currentPlantation}</p>
    </div>
{/if}
