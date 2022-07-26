<script>
  // @ts-nocheck
  const controlsLayout = [];
</script>

<section id="sectionA" style="height: 93vh;">
  <div
    id="container"
    class="flex flex-1 flex-col items-center md:items-start -z-10 p-4 mx-auto md:px-24"
  >
    <h1 class="section-title">
      We empower <br /> Cloud <br />
      <span id="app">DevOps</span>
      <span id="solution" class="hidden">DevOps</span>
    </h1>
    <button class="cta"
      >Let's Collaborate <i class="material-icons">arrow_forward</i>
    </button>
  </div>

  <div class="anim-container">
    <div class="player-container">
      <lottie-player
        id="anim"
        src="/anim/cloud-devops.json"
        autoplay
        renderer="svg"
        controls={false}
        background="transparent"
        height="{100}%"
        width="{100}%"
        {controlsLayout}
      />
    </div>
  </div>

  <div class="w-full">
    <img
      src="https://www.synnfo.com.au/images_desktop/homepage%20cloud%20-%20small.svg"
      alt="cloud desktop"
      style="animation: MoveLeftRight 7s linear infinite"
      class="hidden object-contain w-full md:block"
    />

    <img
      src="https://www.synnfo.com.au/images_desktop/homepage%20cloud%20-big.svg"
      alt="cloud desktop"
      style="animation: MoveUpDown 7s linear infinite"
      class="cloud3-big"
    />

    <img
      style="height: 94px; transform: translateY(-8%)"
      class="absolute object-cover bottom-0 left-0 w-full block md:hidden"
      src="https://www.synnfo.com.au/assets_mob/combined-shape@2x.png"
      alt="cloud"
    />
    <img
      style="height: 148px; transform: translateY(12%)"
      class="absolute object-cover bottom-0 left-0 w-full block md:hidden"
      src="https://www.synnfo.com.au/assets_mob/cloud-3@2x.png"
      alt="cloud"
    />
  </div>
</section>

<style lang="postcss">
  :global(#sectionA) {
    @apply relative overflow-y-hidden overflow-x-hidden;
    height: 93vh;
  }
  h1 {
    @apply text-center md:text-left;
  }
  #container {
    max-width: 1600px !important;
    margin-top: 20px;
  }
  .section-title {
    letter-spacing: 2px;
    margin-bottom: 1em;
  }

  .anim-container {
    @apply block relative w-full;
    height: 80%;
  }

  .player-container {
    bottom: 15%;
    width: 100%;
    z-index: -10;
    position: absolute;
  }

  .cloud3-big {
    @apply hidden absolute md:block h-auto object-contain w-full z-0;
    bottom: -5%;
  }

  @media screen and (min-width: 700px) {
    .section-title {
      line-height: 5rem;
    }
    :global(#sectionA) {
      height: 900px;
    }

    .player-container {
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      bottom: 60px;
    }
  }
  @media screen and (min-width: 900px) {
    :global(#sectionA) {
      height: 100vh;
      max-height: 80rem;
    }
    #container {
      margin-top: 120px;
      @apply mx-24;
    }
    .anim-container {
      @apply p-0 absolute block;
      left: 40%;
      width: 56.3rem;
      top: 3%;
    }
    .player-container {
      bottom: -15%;
      position: absolute;
    }
  }
  @media screen and (min-width: 1100px) {
    .anim-container {
      left: 30%;
      top: 2.5%;
    }
    .cloud3-big {
      bottom: -40%;
    }
  }
</style>
