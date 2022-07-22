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
  class="flex justify-center items-start gap-36 h-full w-full p-24 z-50 bg-white"
>
  <div class="hidden md:block">
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
  <div class="flex flex-col justify-around self-center gap-2">
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

  <div
    id="nav-list"
    style={`background-position: ${open ? "0vw 77vh" : "-20vw 100vh"};
  background-size: 120%; top: ${open ? "0" : "5vh"}`}
    class={`fixed bg-no-repeat bg-cover
transition-all duration-500 ease-in-out
h-full w-full pointer-events-none ${
      open ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  />

  <div
    id="nav-img"
    class={`fixed max-w-screen w-full h-screen-1/4 
    transition-all ease-in-out duration-700 
    bg-no-repeat bg-cover overflow-y-visible ${
      open ? "top-[80vh] left-0" : "top-[101vh] left-[20vw]"
    }`}
  />
</div>

<style lang="postcss">
  h3 {
    @apply text-accent text-center md:text-left font-semibold text-sm md:text-xl mb-6 md:mb-4 uppercase;
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
    @apply text-2xl text-center md:text-left md:text-6xl mb-6 font-bold;
    font-family: "Merriweather", sans-serif;
  }
  #nav-img {
    background-image: url("https://www.synnfo.com.au/images/homepagecloudbig.svg");
    animation: MoveNavBgUpDown 7s linear infinite;
  }
  #nav-list {
    background-image: url("https://www.synnfo.com.au/images/homepagecloudsmall.svg");
    animation: MoveNavBgSide 7s linear infinite;
  }
</style>
