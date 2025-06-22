<script>
    export let herdsVisible = false;
    export let selectedHerd = null;
    import { landScape } from "$lib/state.svelte.js";
</script>

{#if herdsVisible}
    {#each landScape.herds as herd}
        <button
            class="button"
            on:click={() => {
                {
                    selectedHerd = herd; // set the selected herd
                }
            }}
        >
            <p>{herd.herdName}</p>
        </button>
    {/each}
{/if}

<button
    class="button"
    on:click={() => {
        herdsVisible = !herdsVisible;
        selectedHerd = null; // reset selection if toggling off
    }}
>
    <p>Herd</p>
</button>

<!-- Show herd info after clicking -->
{#if selectedHerd}
    <div class="box">
        <p>Herd Name: {selectedHerd.herdName}</p>
        <p>Herd Size: {selectedHerd.herdSize}</p>
    </div>
{/if}
