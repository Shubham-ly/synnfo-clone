<script>
  let currentSelectedTab = 0;
  const moonImageUrls = [
    "https://www.synnfo.com.au/assets/animation_moon/moon.svg",
    "https://www.synnfo.com.au/assets/animation_moon/moon2.svg",
    "https://www.synnfo.com.au/assets/animation_moon/moon3.svg",
  ];
  const models = [
    {
      id: "fullTimeModel",
      header: "Full Time Model",
      body: `At Synnfo, professionals strive to deliver our commitment with
      unwavering focus, passion and flexibility which allows you to make swift
      decisions for changing needs.
      <br />
      Best suited for trial and proof of new concepts.`,
    },
    {
      id: "partTimeModel",
      header: "Part Time Model",
      body: `With our keen sense of learning, this model helps you to free yourself
      from your rhythm to focus on the next big opportunity. Synnfo
      professionals will learn your tune in no time, and help you to maintain
      and elevate it when necessary.
      <br />
      Best suited for a well-established and matured team.`,
    },
    {
      id: "virtulaModel",
      header: "Virtual Model",
      body: `Experience our very own innovative virtual model which provides you with
      our team of handpicked virtual professional across the globe. This
      industry best group of talent allows you to kickstart with minimal lead
      time at a fraction of cost. You can select a full agile squad who
      understand each other to deliver you the best outcome.`,
    },
  ];

  let imgContainer = null;
  let moonImage = null;
  let moonBack = null;
  let moonFront = null;

  function onTabClicked(index) {
    currentSelectedTab = index;
    moonBack.setAttribute("id", "");
    moonFront.setAttribute("id", "");
    setTimeout(() => {
      moonImage.setAttribute("src", moonImageUrls[currentSelectedTab]);
      moonBack.setAttribute("id", `moonBack${currentSelectedTab + 1}`);
      moonFront.setAttribute("id", `moonFront${currentSelectedTab + 1}`);
    }, 400);
    imgContainer.style.opacity = 0;
    setTimeout(() => {
      imgContainer.style.opacity = 1;
    }, 500);
  }
</script>

<main class="p-8 md:px-[11%] overflow-hidden">
  <div class="flex flex-col gap-2 mt-8">
    <h4 class="uppercase text-accent text-sm md:text-lg font-bold">
      Engagement model
    </h4>
    <h3>We offer the choice</h3>
    <p class="text-sm md:text-lg">
      We offer you various models that you can choose from as per your needs,
      all with the same commitment of winning your trust
    </p>
  </div>

  <div
    class="flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:my-60"
  >
    <div
      bind:this={imgContainer}
      class="img-container pointer-events-none select-none"
    >
      <img
        src="https://www.synnfo.com.au/assets/animation_moon/moon.svg"
        alt="moon"
        id="moonImage"
        class="moon-image"
        bind:this={moonImage}
      />
      <img
        src="https://www.synnfo.com.au/assets/animation_moon/backcloud.svg"
        alt="back cloud"
        id="backCloud"
        class="backCloud"
        bind:this={moonBack}
      />
      <img
        src="https://www.synnfo.com.au/assets/animation_moon/frontcloud.svg"
        alt="front cloud"
        id="frontCloud"
        class="frontCloud"
        bind:this={moonFront}
      />
      <img
        src="https://www.synnfo.com.au/assets/animation_moon/side-small.svg"
        alt="stars"
        id="stars"
        class="absolute max-w-full max-h-full bottom-0 left-0"
      />
    </div>

    <div
      class="flex flex-col my-4 gap-1 justify-start max-w-[400px] md:max-w-[420px] md:mr-auto md:ml-[7%]"
    >
      {#each models as model, index}
        <div
          id={model.id}
          class="bg-accent md:bg-transparent p-2 bg-opacity-10 rounded-md cursor-pointer"
        >
          <h3
            on:click={() => onTabClicked(index)}
            class={`${
              currentSelectedTab === index ? "text-black" : "text-muted"
            }`}
          >
            {model.header}
          </h3>
          <p
            style={`max-height: ${
              currentSelectedTab === index ? "250px" : "0"
            }`}
            class="transition-all duration-300 ease-out overflow-hidden text-sm md:text-lg"
          >
            {@html model.body}
          </p>
        </div>
      {/each}
    </div>

    <div class="progress-bar">
      <span
        style={`height: 150px; top: ${currentSelectedTab * 150}px`}
        class="absolute bg-accent w-full transition-all duration-300 ease-out"
      />
    </div>
  </div>
</main>

<style lang="postcss">
  h3 {
    font-family: "Merriweather", sans-serif;
    @apply font-bold text-xl md:text-4xl;
  }
  .text-muted {
    color: #818181;
  }
  .img-container {
    margin: 2rem auto 2.8rem;
    max-width: 400px;
    transition-duration: 400ms;
    transition-timing-function: ease;
    z-index: 0;
    @apply w-full relative transition-opacity md:mx-0;
  }
  #moonImage {
    @apply transition-all duration-1000;
    max-height: 200px;
    margin-inline: auto;
  }
  .backCloud {
    @apply absolute top-0 transition-all;
    z-index: -1;
    transition-duration: 400ms;
    max-width: 45%;
    right: -50px;
  }
  .frontCloud {
    @apply absolute bottom-0 transition-all;
    left: -70px;
    transition-duration: 400ms;
    max-width: 65%;
  }
  .progress-bar {
    @apply hidden md:block w-2 bg-gray-500 relative;
    height: 450px;
  }
  @media screen and (min-width: 900px) {
    .img-container {
      flex: 1;
      width: 40%;
      max-width: 450px;
      margin-right: auto;
    }
  }
  #moonBack1 {
    right: 0px !important;
  }
  #moonBack2 {
    right: 20px !important;
  }
  #moonBack3 {
    right: 0 !important;
  }
  #moonFront1 {
    left: -8% !important;
  }
  #moonFront2 {
    left: 0% !important;
  }
  #moonFront3 {
    left: -30px !important;
  }
</style>
