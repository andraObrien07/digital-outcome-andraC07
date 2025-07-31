<script>
    import { user } from "$lib/state.svelte.js";
    import { goto } from "$app/navigation";
    import Header from "$lib/Header.svelte";
    import { logout } from "$lib/db.js";
    import { landScape } from "$lib/state.svelte.js";
    import Herds from "$lib/Herds.svelte";
    import Paddocks from "$lib/Paddocks.svelte";
    import Lame from "$lib/Lame.svelte";
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
            localStorage.setItem("user", JSON.stringify(user));
            // getCharacter(data.uid);
            getfarms();
        }
    });

    let paddocksVisible = false;
    let selectedPaddock = null;
    let lames = [];

    lames = [...lames, newLame()];
    function newLame() {}
    function addLame() {}
</script>

<Header />
<p>{landScape.nameFarm}</p>

<main>
    <Herds />
    <Paddocks />

    <button
        class="button"
        on:click={() => {
            goto("/fert");
        }}
    >
        <p>Fert</p>
    </button>

    <div class="box">
        <label class="label">
            Lame Cow id <input type="number" bind:value={landScape.lameCows} />
            <p>Lame cow {landScape.lameCows}</p>
        </label>

        <Lame />
        <!-- <button
            class="button"
            on:click={() => {
                addLame();
                landScape.herds = [...landScape.herds, { ...newHerd }];
                newHerd.herdName = "";
            }}
        >
            Save Lame
        </button> -->
    </div>
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
</main>
