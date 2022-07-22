<div class="flex justify-center items-start h-full gap-36 p-24 z-50">
  <div>
    <div>
      <h3 class="mb-4">Services</h3>
      <ul>
        <li><a href="/">Cloud Services</a></li>
        <li><a href="/">Cyber Security</a></li>
        <li><a href="/">Software Testing</a></li>
        <li><a href="/">Digital Solutions</a></li>
        <li><a href="/">Analytics, Insights & Data</a></li>
        <li><a href="/">Managed IT Services</a></li>
      </ul>
    </div>

    <div class="mt-4">
      <h3>Location</h3>
      <p style="max-width: 15ch" class="text-opacity-50 text-black text-sm">
        Level 27, 101 Collins St Melbourne, VIC, Australia 3000
      </p>
    </div>

    <div class="mt-4">
      <h3>Contact</h3>
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

    <div class="mt-4">
      <h3>Social Media</h3>
      <div class="flex gap-4">
        <a
          href="https://www.linkedin.com/company/synnfo-technologies/"
          target="_blank"
        >
          <img
            src="https://www.synnfo.com.au/images/sm-icon-linkedin.svg"
            alt="linkedin"
          />
        </a>
        <a href="https://www.facebook.com/synnfo.com.au" target="_blank">
          <img
            src="https://www.synnfo.com.au/images/sm-icon-facebook.svg"
            alt="facebook"
          />
        </a>
      </div>
    </div>
  </div>
  <div>
    <h3>Menu</h3>
    <h1><a class="text-accent" href="/">Home</a></h1>
    <h1><a href="/">About Us</a></h1>
    <h1><a href="/">Services</a></h1>
    <h1><a href="/">Career</a></h1>
    <h1><a href="/">Blogs</a></h1>
    <h1><a href="/">Contact Us</a></h1>
  </div>
</div>

<style lang="postcss">
  h3 {
    @apply text-accent font-semibold text-xl mb-4 uppercase;
  }
  li {
    @apply text-lg;
  }
  #call::before {
    content: url("https://www.synnfo.com.au/images_desktop/phone_light.svg");
    @apply mr-4;
  }
  #mail::before {
    content: url("https://www.synnfo.com.au/images_desktop/email_light.svg");
    @apply mr-4;
  }
  h1 {
    @apply text-6xl mb-6 font-bold;
    font-family: "Merriweather", sans-serif;
  }
</style>
