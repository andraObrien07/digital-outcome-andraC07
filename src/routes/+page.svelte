<script>
  import Header from "$lib/Header.svelte";

  import { addClassroom, getClassrooms } from "$lib/db.js";

  let classrooms = getClassrooms();

  let newClassroom = {
    roomNumber: "",
    description: "",
    numberOfSeats: "",
  };
</script>

<Header />

<main class="content section">
  {#await classrooms}
    <p>Loading...</p>
  {:then classrooms}
    {#each classrooms as classroom}
      <p>
        {classroom.roomNumber}
        {classroom.description}
        {classroom.numberOfSeats}
      </p>
    {/each}
  {/await}

  <label class="label">
    Room number: <input type="number" bind:value={newClassroom.roomNumber} />
  </label>

  <label class="label">
    Description: <input bind:value={newClassroom.description} />
  </label>

  <label class="label">
    Number of seats: <input
      type="number"
      bind:value={newClassroom.numberOfSeats}
    />
  </label>

  <button
    class="button"
    on:click={() => {
      addClassroom(newClassroom);
    }}
  >
    Save
  </button>
</main>

<footer class="footer">
  <p class="has-text-centered">&copy; Craighead Diocesan School 2025</p>
</footer>
