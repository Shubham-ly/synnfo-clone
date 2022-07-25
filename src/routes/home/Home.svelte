<script>
  // @ts-nocheck
  import SectionA from "./SectionA.svelte";
  import SectionB from "./SectionB.svelte";
  import SectionC from "./SectionC.svelte";
  import SectionD from "./SectionD.svelte";
  import SectionE from "./SectionE.svelte";
  import SectionF from "./SectionF.svelte";
</script>

<SectionA />
<SectionB />
<SectionC />
<SectionD />
<SectionE />
<SectionF />

<style lang="postcss">
  :global(.container) {
    padding: 1rem 8.9%;
  }

  @media screen and (min-width: 900px) {
    :global(.container) {
      margin: 0 auto;
      max-width: 1600px !important;
      padding: 1rem 11%;
    }
  }
</style>
