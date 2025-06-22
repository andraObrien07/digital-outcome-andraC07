<script>
    import Header from "$lib/Header.svelte";
    import { user } from "$lib/state.svelte.js";
    //why is the user no used??!!! shouldnt it be saving to the user
    import { logout } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { landScape } from "$lib/state.svelte.js";

    let fertH = {
        paddockNumber: "",
        amount: "",
    };
</script>

<Header />

<main>
    <div class="box">
        <h2>Fertilisation History</h2>
        <label class="label">
            Paddock Number: <input type="" bind:value={fertH.paddockNumber} />
        </label>

        <label class="label">
            Amount of Fertiliser <input
                type="dates"
                bind:value={fertH.amount}
            />
        </label>

        <button
            class="button"
            on:click={() => {
                landScape.fertHistory = [
                    ...landScape.fertHistory,
                    { ...fertH },
                ];
                fertH.paddockNumber = "";
                fertH.amount = "";
            }}
        >
            Save Fertilisation Data
        </button>
        {#each landScape.fertHistory as fert}
            <div class="box">
                <p>Paddock Number:{fert.paddockNumber}</p>
                <p>Amount of Fertiliser:{fert.amount}</p>
            </div>
        {/each}
    </div>

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
