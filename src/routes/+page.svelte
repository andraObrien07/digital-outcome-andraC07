<script>
    import Header from "$lib/Header.svelte";
    import { login } from "$lib/db.js";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { user } from "$lib/state.svelte.js";
    import { getfarms } from "$lib/db.js";

    onMount(() => {
        const savedUser = localStorage.getItem("user");

        if (savedUser && !user.uid) {
            // if (localStorage.getItem("user") && !user.uid) {
            let data = JSON.parse(savedUser);
            console.log("Loading user from localStorage:", data);
            user.uid = data.uid;
            user.email = data.email;
            user.displayName = data.displayName;
            user.photoURL = data.photoURL;
            console.log("User loaded from localStorage:", user);

            if (user.uid) {
                getfarms();
            }
        }
    });
</script>

<Header />

<main>
    <div class="nav-container">
        <button
            class="nav-button"
            on:click={() => {
                login();
                goto("/farms");
            }}
        >
            Login
        </button>

        <button
            class="nav-button"
            on:click={() => {
                login();
                goto("/farms");
            }}
        >
            Sign In
        </button>
    </div>
    <h2>
        <p>Take your land from Patch to Plenty with Green Patch</p>
    </h2>

    <a href="/acts"
        ><img class="logo" src="/ChatGPTimage.png" alt="GreenPatch Logo" /></a
    >
</main>

<style>
    main {
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: flex-end; /* push to right */
        align-items: center; /* vertically center */
    }

    .logo {
        /* width: 100px;
        height: auto;
        margin-bottom: 1rem; */
        border-radius: 30px; /* rounded corners */
        padding: 2rem;
        display: flex;
        flex-direction: left;
        align-items: left;
        width: 220px; /* control the size */
        height: 220px;
        box-sizing: border-box;
        display: flex;
    }
    .nav-container {
        height: 100vh;
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4rem; spacing between buttons */
        display: flex;
        flex-direction: column;
        align-items: right;
        gap: 2rem;
        margin-right: 3rem; /* space from right edge */
        display: flex;
    }

    .nav-button {
        width: 150px;
        height: 150px;
        background-color: #85bb55; /* soft green */
        color: #1b2670;
        font-size: 2rem;
        font-weight: bold;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        text-align: center;
        line-height: 1.2;
    }
</style>
