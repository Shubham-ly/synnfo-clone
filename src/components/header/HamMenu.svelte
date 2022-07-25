<script>
  export let open = false;
</script>

<div on:click style="z-index: 99" class="h-12 w-12 relative md:px-6">
  <div class:open id="ham-strip-1" class="ham-strip top-5 md:top-3.5" />
  <div class:open id="ham-strip-2" class="ham-strip bottom-5 md:bottom-3.5" />
</div>

<style lang="postcss">
  .ham-strip {
    @apply h-[2px] md:h-1 w-6 md:w-11 bg-accent absolute transition-all ease-out duration-300 origin-center;
  }
  .ham-strip.open {
    top: 50%;
  }
  #ham-strip-1.open {
    transform: rotateZ(45deg);
  }
  #ham-strip-2.open {
    transform: rotateZ(-45deg);
  }
  div {
    @apply pr-0 md:pr-[11%];
  }
</style>
