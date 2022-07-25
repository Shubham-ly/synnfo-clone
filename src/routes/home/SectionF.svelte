<div id="sectionF">
  <div id="mailBg">
    <div class="container wrapper">
      <div class="flex flex-col gap-2 md:gap-4 mt-8 experts-about">
        <h4 class="uppercase text-accent text-sm md:text-xl font-bold">
          Collaborate with us
        </h4>
        <h3 class="font-bold text-2xl md:text-4xl">
          Have an idea? Hold that thought! <br />
          We will reach out to you
        </h3>
        <a class="cta self-start text-xs font-bold" href="/about"
          >Drop your details here <i class="material-icons">arrow_forward</i>
        </a>
      </div>
      <div class="flex flex-col gap-2 md:gap-4 mt-8 experts-about">
        <h4 class="uppercase text-accent text-sm md:text-xl font-bold">
          We are looking for talents
        </h4>
        <h3 class="font-bold text-2xl md:text-4xl">
          Do you have the same <br />
          passion and love for <br />
          technology like we do?
        </h3>
        <a class="cta self-start text-xs font-bold" href="/about"
          >Join Us <i class="material-icons">arrow_forward</i>
        </a>
      </div>
      <img
        id="mail"
        src="https://www.synnfo.com.au/images/group-59.svg"
        alt="mail"
      />
    </div>
  </div>
</div>

<style lang="postcss">
  #sectionF {
    background-color: #fff5f1;
  }
  h3 {
    font-family: "Merriweather", sans-serif;
  }
  a {
    border-color: black;
    color: black;
  }
  a:hover,
  a:focus {
    background-color: black;
    color: white;
  }
  #mail {
    @apply absolute bottom-0 object-contain select-none pointer-events-none;
    right: 4px;
  }
  #mailBg {
    background-image: url("https://www.synnfo.com.au/images_desktop/mailbox_bg.svg");
    @apply md:block bg-no-repeat bg-contain w-full h-full;
    background-position-y: bottom;
  }

  .wrapper {
    @apply relative bg-no-repeat bg-cover;
    height: 71.6rem;
    background-image: url("https://www.synnfo.com.au/assets_mob/combined-shape_2.png");
    background-position-y: 8.9rem;
  }

  @media screen and (min-width: 900px) {
    #sectionF {
      height: 134.1rem;
    }
    #mail {
      height: 95%;
      right: 6%;
    }
  }
</style>
