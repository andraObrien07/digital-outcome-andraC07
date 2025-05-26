<script>
    import Header from "$lib/Header.svelte";
    import LoginNav from "$lib/LoginNav.svelte";
    import { login } from "$lib/db.js";
</script>

<Header />
<LoginNav />
<button
    class="button"
    on:click={() => {
        login(login);
    }}
>
    Login
</button>

<main></main>
