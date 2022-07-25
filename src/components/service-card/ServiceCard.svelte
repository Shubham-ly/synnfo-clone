<script>
  import { onMount } from "svelte";

  export let service;
  export let index;
  let mouseEntered = false;
  let animId = `service-anim-${index}`;

  let anim;

  $: {
    if (mouseEntered) anim?.play();
    else anim?.stop();
  }

  onMount(() => {
    anim = document.querySelector(`#${animId}`);
  });
</script>

<div
  style={`transform: ${mouseEntered ? "scale(1.06)" : "scale(1)"}`}
  on:mouseenter={() => (mouseEntered = true)}
  on:mouseleave={() => (mouseEntered = false)}
  class="service-card"
>
  <div class="self-start ml-4 translate-y-[15%] h-36">
    <lottie-player
      id={animId}
      src={service.anim}
      class="service-icon"
      renderer="svg"
      controls={false}
      height="{100}%"
      width="{100}%"
      background="transparent"
      controlsLayout={[]}
    />
  </div>
  <div class="card-detail">
    <h4 class="text-lg md:text-xl font-bold">{service.name}</h4>
    <p class="flex-1 text-lg md:text-xl">{service.info}</p>
    <a class="text-accent font-bold" href="/">More</a>
  </div>
</div>

<style lang="postcss">
  .service-card {
    @apply transition-transform duration-500 cursor-pointer flex flex-col justify-start items-center w-full h-full;
    min-height: 24rem;
    min-width: 250px;
  }
  @media screen and (min-width: 900px) {
    .service-card {
      min-width: 320px;
    }
  }
  h4,
  a {
    font-family: "Merriweather", sans-serif;
  }
  .card-detail {
    @apply flex flex-1 flex-col justify-between rounded-2xl h-full gap-2;
    background-color: #fff5f1;
    padding: 2.5rem 1.4rem 1rem;
  }
</style>
