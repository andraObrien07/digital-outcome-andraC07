<script>
    import { onMount } from "svelte"
    import { user } from "$lib/state.svelte.js"
    import { getfarms } from "$lib/db.js"

    onMount(() => {
        // Attempt to retrieve the user data string saved in local storage.
        const savedUser = localStorage.getItem("user")

        // If there IS a saved user AND the global user store is empty...
        // This stops is overwriting a new login with an old one.
        // It'll only attempt to load from local if no one is currently logged in.
        if (savedUser && !user.uid) {
            // load up a JS object from what you got from local storage.
            let data = JSON.parse(savedUser)
            console.log("Loading user from localStorage:", data)

            // copy the user data from the new jS object into the global user object
            user.uid = data.uid
            user.email = data.email
            user.displayName = data.displayName
            user.photoURL = data.photoURL
            console.log("User loaded from localStorage:", user)
        }

        // I moved this one outside that first check so that it'll load farm data no matter whether it's a local storage load or an existing user.
        if (user.uid) {
            console.log("Getting the user's farms and all that...")
            getfarms()
            console.log("done.")
        }
    })
</script>