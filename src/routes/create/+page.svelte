<script>
  import Header from "$lib/Header.svelte";
  import { addfarm, getfarms } from "$lib/db.js";
  import { goto } from "$app/navigation";
  import { user } from "$lib/state.svelte.js";

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
  <!-- {#await farms}
    <p>Loading...</p>
  {:then farms}
    {#each farms as farm}
      <p>
        {farm.nameFarm}
        {farm.farmSize}
        {farm.herdNames}
        {farm.herdSize}
        {farm.paddockNumber}
        {farm.paddockSize}
        {farm.paddockLandscape}
        {farm.lastGrazed}
        {farm.lastFertilised}
        {farm.currentPlantation}
      </p>
    {/each}
  {/await} -->
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
    Herd Names: <input type="" bind:value={newfarm.herdNames} />
  </label>

  <label class="label">
    What is the size of this herd? <input
      type="dates"
      bind:value={newfarm.herdSize}
    />
  </label>

  <button
    class="button"
    on:click={() => {
      user.farms.herds = [...user.farms.herds, { ...herds }];
      newHerd = {
        herdNames: "null",
        herdSize: 0,
      };
      //clearing the question tabs doesnt work
      scrollTo("/herdNames");
      //is that the right scroll to command
    }}
  >
    Save Herd
  </button>

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
      type=""
      bind:value={newfarm.currentPlantation}
    />
  </label>

  <button
    class="button"
    on:click={() => {
      user.farm = newfarm;
      addfarm(user);
      goto("/yourfarm");
    }}
  >
    Create Farm
  </button>

  <button
    class="button"
    on:click={() => {
      user.farms.paddocks = [...user.farms.paddocks, { ...paddocks }];
      newpaddock = {
        paddockNumber: "",
        paddockSize: 0,
        paddockLandscape: "",
        lastGrazed: "",
        lastFertilised: "",
        currentPlantation: "",
      };
      scrollTo("/paddockNumber");
      //is that the right scroll to command
    }}
  >
    Save Herd
  </button>
</main>

<footer class="footer">
  <p class="has-text-centered">&copy; Craighead Diocesan School 2025</p>
</footer>
