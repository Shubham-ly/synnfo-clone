<script>
  export let open = false;
</script>

<button on:click class="h-12 w-12 relative z-50">
  <div class:open id="ham-strip-1" class="ham-strip top-3.5" />
  <div class:open id="ham-strip-2" class="ham-strip bottom-3.5" />
</button>

<style lang="postcss">
  .ham-strip {
    @apply h-1 w-11 bg-accent absolute transition-all ease-out duration-300 origin-center;
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
</style>
