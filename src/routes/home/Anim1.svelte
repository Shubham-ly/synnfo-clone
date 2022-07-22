<script>
  // @ts-nocheck
  const controlsLayout = [];
</script>

<section
  id="sectionA"
  style="height: 93vh;"
  class="flex flex-col md:flex-row items-center md:justify-center mx-auto overflow-y-hidden mt-6 -z-10 isolate"
>
  <div
    id="container"
    class="flex flex-col items-center md:items-start -z-10 p-4 md:p-24"
  >
    <h1 class="section-title">
      We engineer <br /> brilliant
      <span id="app">applications</span>
      <span id="solution" class="hidden">solutions</span>
    </h1>
    <button class="cta"
      >Let's Collaborate <i class="material-icons">arrow_forward</i>
    </button>
  </div>

  <div class="relative h-4/5 w-full block -z-10">
    <div
      style="bottom: 15%"
      class="w-full bottom-0 absolute md:w-[46rem] md:left-2/4"
    >
      <lottie-player
        id="anim"
        src="/anim/rocket.json"
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
      style="height: 94px; transform: translateY(-8%)"
      class="absolute object-cover bottom-0 left-0 w-full"
      src="https://www.synnfo.com.au/assets_mob/combined-shape@2x.png"
      alt="cloud"
    />
    <img
      style="height: 148px; transform: translateY(12%)"
      class="absolute object-cover bottom-0 left-0 w-full"
      src="https://www.synnfo.com.au/assets_mob/cloud-3@2x.png"
      alt="cloud"
    />
  </div>
</section>

<style lang="postcss">
  h1 {
    @apply text-center md:text-left;
  }
</style>
