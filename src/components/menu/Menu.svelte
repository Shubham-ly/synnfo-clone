<script>
  export let open = true;
  export let onNavLinkClicked;
  import { Link, useLocation } from "svelte-navigator";
  const location = useLocation();
  let currentPath = "/";
  $: currentPath = $location.pathname;

  const routes = [
    { name: "home", path: "/" },
    { name: "about us", path: "/about_us" },
    { name: "services", path: "/services" },
    { name: "career", path: "/career" },
    { name: "blogs", path: "/blogs" },
    { name: "contact us", path: "/contact_us" },
  ];
</script>

<div
  class="flex justify-between items-baseline h-full w-full z-50 bg-white pt-20"
>
  <div id="nav-list" class:open />

  <div id="nav-img" class:open />

  <div style="padding-left: 18%" class="hidden md:block flex-1 z-50">
    <div>
      <h3 class="mb-2">Services</h3>
      <ul>
        <li><a href="/">Cloud Services</a></li>
        <li><a href="/">Cyber Security</a></li>
        <li><a href="/">Software Testing</a></li>
        <li><a href="/">Digital Solutions</a></li>
        <li><a href="/">Analytics, Insights & Data</a></li>
        <li><a href="/">Managed IT Services</a></li>
      </ul>
    </div>

    <div class="mt-2">
      <h3>Location</h3>
      <p style="max-width: 15ch" class="text-opacity-50 text-black text-sm">
        Level 27, 101 Collins St Melbourne, VIC, Australia 3000
      </p>
    </div>

    <div class="mt-2">
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

    <div class="mt-2">
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
  <div class="flex flex-1 flex-col justify-around gap-2 z-50">
    <h3>Menu</h3>
    {#each routes as route}
      <h1 on:click={onNavLinkClicked}>
        <Link
          class={`${
            route.path === currentPath ? "text-accent" : "text-black"
          } capitalize`}
          to={route.path}>{route.name}</Link
        >
      </h1>
    {/each}
  </div>
</div>

<style lang="postcss">
  h3 {
    @apply text-accent text-center md:text-left font-semibold text-sm md:text-xl mb-4 uppercase;
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
    @apply text-2xl text-center md:text-left md:text-5xl mb-6 font-bold;
    font-family: "Merriweather", sans-serif;
  }
  #nav-img {
    background-image: url("https://www.synnfo.com.au/images/homepagecloudbig.svg");
    animation: MoveNavBgUpDown 7s linear infinite;
    left: 20vw;
    top: 101vw;
    @apply fixed max-w-screen w-full h-screen-1/4 
    transition-all ease-in-out duration-700 
    bg-no-repeat bg-cover overflow-y-visible;
  }

  #nav-img.open {
    top: 80vh;
    left: 0;
  }

  @media screen and (min-width: 900px) {
    #nav-img.open {
      top: 76vh;
    }
  }

  #nav-list {
    background-image: url("https://www.synnfo.com.au/images/homepagecloudsmall.svg");
    animation: MoveNavBgSide 7s linear infinite;
    background-position: -20vw 100vh;
    background-size: 120%;
    top: 5vh;
    opacity: 0;
    visibility: hidden;
    @apply fixed bg-no-repeat bg-cover
      transition-all duration-500 ease-in-out
      h-full w-full pointer-events-none;
  }

  #nav-list.open {
    background-position: 0vw 77vh;
    background-size: 120%;
    top: 0;
    opacity: 100%;
    visibility: visible;
  }
  @media screen and (min-width: 900px) {
    #nav-list.open {
      background-size: 120%;
      background-position: 0vw 68vh;
    }
  }
</style>
