<script>
  import { Header, Menu } from "./components";
  import { Router, Route } from "svelte-navigator";
  import { Home, Contact } from "./routes";
  import { onMount } from "svelte";
  import Footer from "./components/footer/Footer.svelte";
  let navOpen = false;
  let scrollToTopBtn = null;

  onMount(() => {
    window.addEventListener("scroll", () => {
      scrollToTopBtn.style.display =
        window.scrollY > window.innerHeight ? "block" : "none";
    });
  });
</script>

<main>
  <Router>
    <Header open={navOpen} on:click={() => (navOpen = !navOpen)} />
    <div
      class={`w-full bg-white fixed top-0 left-0 h-screen transition-all linear duration-700 z-50 ${
        navOpen ? "top-0 opacity-full" : "-top-full opacity-0"
      }`}
    >
      <Menu open={navOpen} onNavLinkClicked={() => (navOpen = false)} />
    </div>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/contact_us">
      <Contact />
    </Route>
  </Router>
</main>
<button
  bind:this={scrollToTopBtn}
  on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  class="scroll-top"
>
  <img src="https://www.synnfo.com.au/images/back-to-top-btn.svg" alt="Go Up" />
</button>
<Footer />

<style lang="postcss">
  .scroll-top {
    transition: display 0.5s ease-in-out;
    bottom: 25px;
    right: 50px;
    z-index: 999;
    @apply w-10 h-10 fixed md:bottom-20 hidden;
  }
</style>
