<section id="sectionB" class="container">
  <div
    class="flex flex-col md:flex-row-reverse justify-between items-center py-[10%]"
  >
    <img
      id="problemSolverImg"
      src="https://www.synnfo.com.au/images/group-33.svg"
      alt="problem solvers"
      class="object-contain"
    />
    <div class="flex flex-col gap-2 md:gap-4 mt-8 experts-about">
      <h4 class="uppercase text-accent text-sm md:text-xl font-bold">
        Who we are
      </h4>
      <h3 class="font-bold text-2xl md:text-4xl">
        We are digital problem solvers
      </h3>
      <p class="text-lg md:text-xl mb-2 leading-5">
        A team of cloud experts commited to provide expceptional tech solutions
        to complex problems with our expertise and favourite technology, with
        pleasure!
      </p>
      <a class="cta self-start text-xs font-bold" href="/about"
        >Know Us <i class="material-icons">arrow_forward</i>
      </a>
    </div>
  </div>
</section>

<style>
  #sectionB {
    background-image: linear-gradient(to bottom, #fff5f1, #fff5f1);
  }
  h3 {
    font-family: "Merriweather", sans-serif;
  }
  #problemSolverImg {
    width: 300px;
    height: 276px;
  }
  @media screen and (min-width: 900px) {
    .experts-about {
      flex-basis: 40%;
    }
    #problemSolverImg {
      height: 100%;
      flex-basis: 50%;
      max-width: 650px;
    }
  }
</style>
