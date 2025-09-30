<script>
    import Header from "$lib/Header.svelte";
    import { user } from "$lib/state.svelte.js";
    import { logout } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { landScape } from "$lib/state.svelte.js";
    import { onMount } from "svelte";

    import { getfarms } from "$lib/db.js";
    onMount(() => {
        // console.log("onMount called");

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
</script>

<Header />
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
    <button
        class="button"
        on:click={() => {
            logout();
            goto("/create");
        }}
    >
        Create Farm
    </button>
</main>
