<footer>
  <div class="container">
    <div class="grid">
      <div class="links">
        <h4 class="uppercase text-accent">Links</h4>
        <ul class="flex flex-col gap-2 text-white">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </div>
      <div class="location">
        <h4 class="text-accent uppercase">Location</h4>
        <p class="text-gray-500 text-sm">
          Level 27, 101 Collins St <br />Melbourne, VIC, Australia 3000
        </p>
      </div>
      <div class="services">
        <h4 class="text-accent uppercase">Services</h4>
        <ul class="flex flex-col gap-2 text-white">
          <li><a href="/cloud-services">Cloud Services</a></li>
          <li><a href="/cyber-security">Cyber Security</a></li>
          <li><a href="/software-testing">Software Testing</a></li>
          <li><a href="/digital-solutions">Digital Solutions</a></li>
          <li>
            <a href="/analytics-insights-data">Analytics, Insights & Data</a>
          </li>
          <li><a href="/managed-it-services">Managed IT Services</a></li>
        </ul>
      </div>
      <div class="social-media">
        <h4 class="text-accent uppercase">Social Media</h4>
        <div class="flex mt-2">
          <a
            href="https://www.linkedin.com/company/synnfo-technologies/"
            class="mr-4"
          >
            <img
              class="h-6"
              src="https://www.synnfo.com.au/images/sm-icon-linkedin.svg"
              alt="Linkedin"
            />
          </a>
          <a href="https://www.facebook.com/synnfo.com.au">
            <img
              class="h-6"
              src="https://www.synnfo.com.au/images/sm-icon-facebook.svg"
              alt="Facebook"
            />
          </a>
        </div>
      </div>
      <div class="contact">
        <h4>Contact</h4>
        <ul>
          <li>
            <span id="call"
              ><a href="tel:+61 3 8399 9139">+61 3 8399 9139</a></span
            >
          </li>
          <li>
            <span id="mail"
              ><a href="mailto:connect@synnfo.com.au">connect@synnfo.com.au</a
              ></span
            >
          </li>
        </ul>
      </div>
      <div class="collab">
        <h3
          style="font-family: 'Merriweather', sans-serif"
          class="text-2xl md:text-4xl text-white mb-4"
        >
          We engineer <br /> brilliant applications
        </h3>
        <button class="cta"
          >Let's Collaborate <i class="material-icons">arrow_forward</i>
        </button>
      </div>
    </div>
  </div>
</footer>

<style lang="postcss">
  footer {
    background-image: linear-gradient(167deg, #343434 -24%, #000000 130%);
    width: 100%;
    padding: 2.2em 0 10rem;
  }
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    padding-top: 5em;
    row-gap: 1em;
  }
  h4 {
    @apply text-sm md:text-lg text-accent uppercase font-bold;
  }
  a {
    @apply text-sm text-white;
  }
  .services {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }
  .social-media {
    grid-column: 1;
    grid-row: 2;
  }
  .collab {
    grid-column: 1 / 3;
    grid-row: 2/ 5;
    @apply flex flex-col justify-center items-center gap-2;
  }
  .contact {
    display: none;
  }
  @media screen and (min-width: 900px) {
    .grid {
      grid-template-columns: repeat(12, 1fr);
    }
    .links {
      grid-column: 5 / 7;
      grid-row: 1 / 3;
    }
    .location {
      grid-column: 1 / 3;
      grid-row: 3 / 3;
    }
    .services {
      grid-column: 7 / 9;
      grid-row: 1 / 3;
    }
    .social-media {
      grid-column: 10 / 12;
      grid-row: 1/ 2;
    }
    .contact {
      grid-column: 10 / 13;
      grid-row: 2 / 3;
    }
    .collab {
      grid-column: 1/3;
      grid-row-start: 1;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
</style>
