<script>
  import { Header, Menu } from "./components";
  import { Router, Route } from "svelte-navigator";
  import { Home, Contact } from "./routes";
  let navOpen = false;
</script>

<main>
  <Router>
    <Header open={navOpen} on:click={() => (navOpen = !navOpen)} />
    <div
      class={`w-full bg-white fixed top-0 left-0 h-screen transition-all linear duration-700 z-50 ${
        navOpen ? "top-0 opacity-full" : "-top-full opacity-0"
      }`}
    >
      <Menu
        open={navOpen}
        onNavLinkClicked={() => {
          navOpen = false;
          console.log("clicked");
        }}
      />
    </div>
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
