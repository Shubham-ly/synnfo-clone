<script>
  import HamMenu from "./HamMenu.svelte";
  import { Link, useLocation } from "svelte-navigator";

  export let open = false;
  let showServices = false;

  const location = useLocation();
  let currentPath = "/";
  $: currentPath = $location.pathname;

  const routes = [
    { name: "home", path: "/" },
    { name: "about us", path: "/about_us" },
    { name: "services", path: "/services" },
    { name: "contact us", path: "/contact_us" },
  ];
</script>

<header>
  <nav class="flex p-3 md:p-4 items-center justify-between">
    <img
      id="logo"
      src="https://www.synnfo.com.au/images/group-2.svg"
      alt="synnfo-logo"
    />
    <div class="flex nav-link-container items-center gap-6 w-full justify-end">
      <ul
        class="gap-4 opacity-0 hidden md:flex md:opacity-100 md:gap-10 items-center mr-4"
      >
        {#each routes as route}
          {#if route.name === "services"}
            <li
              class="relative"
              on:mouseleave={() => (showServices = false)}
              on:blur={() => (showServices = false)}
              on:mouseover={() => (showServices = true)}
              on:focus={() => (showServices = true)}
            >
              <Link to="/services">Services</Link>
              <div
                class={`${
                  showServices ? "flex" : "hidden"
                } absolute flex-col rounded-xl left-2/4 -translate-x-2/4 w-40 services services mt-3 z-10 bg-[#fff5f0]`}
              >
                <a class="rounded-t-xl" href="/">Cloud Services</a>
                <a href="/">Cyber Security</a>
                <a href="/">Software Testing</a>
                <a href="/">Data Analytics & Insights</a>
                <a href="/">Digital Solutions</a>
                <a class="rounded-b-xl" href="/">Managed IT Services</a>
              </div>
            </li>
          {:else}
            <li>
              <Link
                to={route.path}
                class={`${
                  currentPath === route.path ? "text-accent" : "text-black"
                } uppercase`}>{route.name}</Link
              >
            </li>
          {/if}
        {/each}
      </ul>
      <HamMenu on:click {open} />
    </div>
  </nav>
</header>

<style lang="postcss">
  nav {
    max-width: 1600px;
    margin: 0 auto;
    @apply h-24;
  }
  #logo {
    margin-left: 11%;
    width: 155px;
  }
  li {
    @apply p-2 uppercase;
  }
  .nav-link-container {
    max-width: 750px;
  }
  .services::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid;
    @apply border-b-accent border-opacity-10;
  }
  .services a {
    font-size: 14px;
    @apply hover:bg-accent hover:bg-opacity-20 p-3 hover:text-black;
  }
</style>
