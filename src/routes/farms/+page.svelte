<script>
    import Header from "$lib/Header.svelte";
    import CreateNav from "$lib/CreateNav.svelte";
    import YourFarms from "$lib/YourFarms.svelte";
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
</script>

<Header />
<CreateNav />
<YourFarms />
