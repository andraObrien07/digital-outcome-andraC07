<script>
    import Header from "$lib/Header.svelte";
    import { user } from "$lib/state.svelte.js";
    import { logout } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { landScape } from "$lib/state.svelte.js";
    import { onMount } from "svelte";

    import { getfarms } from "$lib/db.js";
    onMount(() => {
        if (localStorage.getItem("user") && !user.uid) {
            let data = JSON.parse(localStorage.getItem("user"));
            console.log("Loading user from localStorage:", data);
            user.uid = data.uid;
            user.email = data.email;
            user.displayName = data.displayName;
            user.photoURL = data.photoURL;
            console.log("User loaded from localStorage:", user);
            // getCharacter(data.uid);
            getfarms();
        }
    });

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
