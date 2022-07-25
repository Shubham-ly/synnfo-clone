<!-- https://www.synnfo.com.au/images_desktop/group-44.svg -->
<script>
  const processes = [
    {
      name: "Requirement gathering",
      info: "We cut the chaff to focus on needs that make a real difference for your customers to build a solid foundation.",
      img: "https://www.synnfo.com.au/images/process-req-gathering-copy.svg",
    },
    {
      name: "Resource selection",
      info: "We make the careful choices to ensure your future success with the right skills and mindset.",
      img: "https://www.synnfo.com.au/images/process-resource-selection-copy.svg",
    },
    {
      name: "Proposal",
      info: "We look for an oportunity that is underlined with quality and excellence.",
      img: "https://www.synnfo.com.au/images/process-proposal-copy.svg",
    },
    {
      name: "Execution",
      info: "We strive to impress with our quality work and provide insightful results.",
      img: "https://www.synnfo.com.au/images/process-contract-copy.svg",
    },
    {
      name: "Continous improvement",
      info: "We start everyday with an aim to improve and innovate.",
      img: "https://www.synnfo.com.au/images/process-ci-copy.svg",
    },
    {
      name: "Contract finalization",
      info: "We give out commitement for your success",
      img: "https://www.synnfo.com.au/images/process-execution-copy.svg",
    },
  ];
</script>

<section id="sectionD" class="container">
  <div class="flex flex-col gap-2 md:gap-4 mt-8">
    <h4 class="uppercase text-accent text-sm md:text-xl font-bold">Process</h4>
    <h3 class="font-bold text-2xl md:text-4xl">We mind the process!</h3>
    <p class="text-lg md:text-xl mb-2 leading-5">
      We have an engagement process that provides you with a seamless experience
      that focuses on your key needs
    </p>
  </div>
  <div
    class="flex flex-col md:grid md:grid-cols-3 md:flex-wrap mt-7 md:mt-32 mb-12 gap-4"
  >
    {#each processes as process}
      <div
        class="flex flex-row md:flex-col md:justify-center items-start md:items-center gap-2"
      >
        <img src={process.img} alt={process.name} />
        <div>
          <h4
            style="font-family: 'Merriweather', sans-serif"
            class="text-sm md:text-lg font-bold md:text-center"
          >
            {process.name}
          </h4>
          <p class="text-sm md:text-lg md:text-center">{process.info}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  #sectionD {
    background-color: #fff5f1;
  }
  @media screen and (min-width: 900px) {
    #sectionD {
      z-index: 40;
      background-position-y: -68rem;
      background-image: url("https://www.synnfo.com.au/images_desktop/group-44.svg");
      background-repeat: repeat-x;
      padding-top: 8rem;
    }
  }
  img {
    width: 50px;
  }
  h3 {
    font-family: "Merriweather", sans-serif;
  }
  @media screen and (min-width: 900px) {
    img {
      width: 92px;
      height: 92px;
    }
  }
</style>
