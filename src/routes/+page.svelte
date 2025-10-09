<script>
    import Header from "$lib/Header.svelte";
    import { login } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { user } from "$lib/state.svelte.js";
    import { getfarms } from "$lib/db.js";
    import UserManagement from "$lib/UserManagement.svelte";
</script>

<!-- <UserManagement /> -->

<Header />

<main>
    <div class="slogan">
        <h2>
            <p>Take Your</p>
            <p>Land From</p>
            <p>Patch to Plenty</p>
            <p>with Green Patch</p>
        </h2>
    </div>

    <div class="logo-center">
        <img class="logo" src="/ChatGPTimage.png" alt="GreenPatch Logo" />
    </div>

    <div class="nav-container">
        <button
            class="nav-button"
            on:click={() => {
                login();
                goto("/yourfarm");
            }}
        >
            Login
        </button>

        <button
            class="nav-button"
            on:click={() => {
                login();
                goto("/yourfarm");
            }}
        >
            Sign In
        </button>
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");
    main {
        margin: 0;
        /* height: 100vh; */
        display: flex;
        /* justify-content: flex-end; push to right */
        align-items: center; /* vertically center */
        background-color: white;
        /* align-items: center; */
    }

    .slogan {
        flex: 1;
        text-align: left;
        padding-left: 5rem;
        font-family: "Crimson Text", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 3rem;
    }

    /* .logo-center { */

    /* flex: 1;
        display: flex;
        justify-content: center; */

    .logo {
        border-radius: 80px;
        /* background-color: #f1e7cf; */
        padding: 2rem;
        width: 420px;
        height: 420px;
        object-fit: contain;
        display: flex;
        justify-content: center;
        align-items: center;

        /* padding-right: 8rem; */
    }
    .nav-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        padding-bottom: 4rem;
        padding-top: 4rem;
        padding-left: 5rem;
    }

    .nav-button {
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

    .nav-button:hover {
        background-color: #1b2670;
        color: #85bb55;
    }
    h2 {
        color: #1b2670;
    }
</style>
