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
            <p>Take your land</p>
            <p>from Patch to Plenty</p>
            <p>with Green Patch</p>
        </h2>
    </div>

    <div class="logo-center">
        <a href="/acts"
            ><img
                class="logo"
                src="/ChatGPTimage.png"
                alt="GreenPatch Logo"
            /></a
        >
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
    main {
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: flex-end; /* push to right */
        align-items: center; /* vertically center */
        background-color: white;
    }

    .slogan {
        flex: 1;
        text-align: right;
        padding-right: 3rem;
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
    }
    .nav-container {
        /* height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: right;
        gap: 2rem;
        margin-right: 3rem; /* space from right edge */
        /* display: flex;  */

        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }

    .nav-button {
        width: 270px;
        height: 270px;
        background-color: #85bb55; /* soft green */
        color: #1b2670;
        font-size: 2rem;
        font-weight: bold;
        border: none;
        border-radius: 59px;
        cursor: pointer;
        text-align: center;
        line-height: 1.2;
    }

    .nav-button:hover {
        background-color: #1b2670;
        color: #85bb55;
    }
    h2 {
        color: #1b2670;
    }
</style>
