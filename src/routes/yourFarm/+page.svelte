<script>
    import Header from "$lib/Header.svelte";
    import { user } from "$lib/state.svelte.js";
    import { logout } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { landScape } from "$lib/state.svelte.js";
    import CreateNav from "$lib/CreateNav.svelte";
    import UserManagement from "$lib/UserManagement.svelte";

    import { getfarms } from "$lib/db.js";
</script>

<Header />
<UserManagement />
<!-- <user /> -->
<main>
    <div class="nav-container">
        {#if user.uid}
            <button
                class="your-farm-nav-button"
                on:click={() => {
                    goto("/choicefarm");
                }}
            >
                <p>{landScape.nameFarm}</p>
                <!-- <p>{user.uid}</p> -->
            </button>
        {/if}

        <CreateNav />
    </div>
    <div class="logout-nav">
        <button
            class="logout-button"
            on:click={() => {
                logout();
                goto("/");
            }}
        >
            Logout
        </button>
    </div>
</main>

<style>
    main {
        background-color: white;
    }

    .logout-nav {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        padding-bottom: 4rem;
        padding-top: 4rem;
    }

    .logout-button:hover {
        background-color: #1b2670;
        color: #85bb55;
    }

    .logout-button {
        width: 100px;
        height: 70px;
        background-color: #85bb55; /* soft green */
        color: #1b2670;
        font-size: 2rem;
        font-weight: bold;
        border: none;
        border-radius: 59px;
        cursor: pointer;
        text-align: center;
        line-height: 1.2;
        font-family: "Crimson Text", serif;
        font-weight: 400;
        font-style: normal;
    }

    .nav-container {
        flex: 1;
        display: flex;
        flex-direction: row;
        /* align-items: center; */
        gap: 18rem;
        padding-bottom: 4rem;
        padding-top: 4rem;
        justify-content: center;
    }

    .your-farm-nav-button {
        width: 270px;
        height: 270px;
        background-color: #85bb55; /* soft green */
        color: #1b2670;
        font-size: 5rem;
        font-weight: bold;
        border: none;
        border-radius: 59px;
        cursor: pointer;
        text-align: center;
        line-height: 1.2;
        font-family: "Crimson Text", serif;
        font-weight: 400;
        font-style: normal;
    }

    .your-farm-nav-button:hover {
        background-color: #1b2670;
        color: #85bb55;
    }
</style>
