<script>
  import HamMenu from "./HamMenu.svelte";
  import { Link } from "svelte-navigator";

  export let open = false;
  let showServices = false;
</script>

<header>
  <nav class="flex p-4 items-center justify-between">
    <img
      id="logo"
      src="https://www.synnfo.com.au/images/group-2.svg"
      alt="synnfo-logo"
    />
    <div class="flex nav-link-container">
      <ul class="flex w-full justify-around gap-10 items-center mr-4">
        <li><a href="/" class="text-accent">Home</a></li>
        <li><a href="/">About us</a></li>
        <li
          class="relative"
          on:mouseleave={() => (showServices = false)}
          on:blur={() => (showServices = false)}
          on:mouseover={() => (showServices = true)}
          on:focus={() => (showServices = true)}
        >
          <a href="/">Services</a>
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
        <li class="mr-16"><Link to="/contact_us">Contact us</Link></li>
      </ul>
      <HamMenu on:click {open} />
    </div>
  </nav>
</header>

<style lang="postcss">
  nav {
    max-width: 1600px;
    margin: 0 auto;
    padding-right: 11%;
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
