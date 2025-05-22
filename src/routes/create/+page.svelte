<script>
  import Header from "$lib/Header.svelte";
  import { addfarm, getfarms } from "$lib/db.js";

  let farms = getfarms();

  let newfarm = {
    nameFarm: "",
    farmSize: "",
    herdNames: "",
    herdSize: "",
    paddockNumber: "",
    paddockSize: "",
    paddockLandscape: {
      steep: false,
      stoney: false,
      wet: false,
    },
    lastGrazed: "",
    lastFertilised: "",
    currentPlantation: "",
  };
</script>

<!-- all newfarm should be newFarm -->

<Header />

<main class="content section">
  {#await farms}
    <p>Loading...</p>
  {:then farms}
    {#each farms as farm}
      <p>
        {farm.paddockNumber}
        {farm.herdNames}
        {farm.herdSize}
        {farm.nameFarm}
        {farm.farmSize}
        {farm.paddockSize}
        {farm.paddockLandscape}
        {farm.lastGrazed}
        {farm.lastFertilised}
        {farm.currentPlantation}
      </p>
    {/each}
  {/await}
  <label class="label">
    Name Your Farm <input type="text" bind:value={newfarm.nameFarm} />
  </label>

  <label class="label">
    What size is your farm in m2 <input
      type="number"
      bind:value={newfarm.farmSize}
    />
  </label>

  <label class="label">
    Herd Names: <input type="number" bind:value={newfarm.herdNames} />
    <button
      class="button"
      on:click={() => {
        addfarm(newfarm);
      }}
    >
      Save
    </button>
  </label>

  <label class="label">
    What is the size of this herd? <input
      type="dates"
      bind:value={newfarm.herdSize}
    />
  </label>

  <label class="label">
    Paddock Number: <input type="number" bind:value={newfarm.paddockNumber} />
  </label>

  <label class="label">
    Size of paddock in m2 <input
      type="number"
      bind:value={newfarm.paddockSize}
    />
  </label>

  <label class="landscape">
    Landscape of paddock
    <button
      class="button"
      on:click={() => {
        newfarm.paddockLandscape.steep = true;
      }}
      class:is-success={newfarm.paddockLandscape.steep}
    >
      Steep
    </button>
    <button
      class="button"
      on:click={() => {
        newfarm.paddockLandscape.stoney = true;
      }}
      class:is-success={newfarm.paddockLandscape.stoney}
    >
      Stoney
    </button>
    <button
      class="button"
      on:click={() => {
        newfarm.paddockLandscape.wet = true;
      }}
      class:is-success={newfarm.paddockLandscape.wet}
    >
      Wet
    </button>
  </label>

  <label class="label">
    When was this paddock last grazed? <input
      type="dates"
      bind:value={newfarm.lastGrazed}
    />
  </label>

  <label class="label">
    When was this paddock last fertilised? <input
      type="dates"
      bind:value={newfarm.lastFertilised}
    />
  </label>

  <label class="label">
    What is the current plantation in this paddock? <input
      type="dates"
      bind:value={newfarm.currentPlantation}
    />
  </label>

  <button
    class="button"
    on:click={() => {
      addfarm(newfarm);
    }}
  >
    Create Farm
  </button>
</main>

<footer class="footer">
  <p class="has-text-centered">&copy; Craighead Diocesan School 2025</p>
</footer>
