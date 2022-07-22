<script>
  import { Header, Menu } from "./components";
  import { fly } from "svelte/transition";
  import { Router, Route } from "svelte-navigator";
  import { Home, Contact } from "./routes";
  let navOpen = false;
</script>

<main>
  <Router>
    <Header open={navOpen} on:click={() => (navOpen = !navOpen)} />
    {#if navOpen}
      <div
        class="w-full bg-white fixed top-0 left-0 h-screen"
        in:fly={{ y: -200, duration: 350 }}
        out:fly={{ y: -200, duration: 350 }}
      >
        <Menu />
      </div>
    {/if}
    <Route path="/">
      <Home />
    </Route>
    <Route path="/contact_us">
      <Contact />
    </Route>
  </Router>
</main>

<style>
</style>
