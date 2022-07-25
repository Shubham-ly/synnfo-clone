<script>
  import ServiceCard from "../../components/service-card/ServiceCard.svelte";

  const services = [
    {
      name: "Cloud Services",
      info: "We use the best and cost effective cloud computing technologies to solve your business needs with precision that ensure a quick turnaround.",
      anim: "/anim/service-1.json",
    },
    {
      name: "Cyber Security",
      info: "We specialise in setting strong defense system to protect your valuable customers and IT assets from cyber attacks.",
      anim: "/anim/service-2.json",
    },
    {
      name: "Software Testing",
      info: "We use automated, reusable, and innovative testing procedures to match the need of Agile Software Development without compromising on quality.",
      anim: "/anim/service-3.json",
    },
    {
      name: "Data Analytics & Insights",
      info: "We identify problems before they become an issue for your customers through new age data analytics practices.",
      anim: "/anim/service-4.json",
    },
    {
      name: "Digital Solutions",
      info: "We ensure a costant connection with Your customer on apps, websites, or micro-sites through effective digital solutions.",
      anim: "/anim/service-5.json",
    },
    {
      name: "Managed IT Solutions",
      info: "We provide IT solutions that manage all your IT needs so you can focus on your next big idea and customer.",
      anim: "/anim/service-6.json",
    },
  ];
</script>

<section id="sectionC" class="container">
  <div class="flex flex-col gap-4 md:gap-4 mt-8 experts-about">
    <h4 class="uppercase text-accent text-sm md:text-xl font-bold">
      Our services
    </h4>
    <h3 class="font-bold text-2xl md:text-4xl">What can we do for You</h3>
    <p class="text-lg md:text-xl leading-5">
      We strive to bring the highest quality solutions with a fresh perspective
      focused on emerging technology
    </p>

    <div
      class="grid grid-rows-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-12 overflow-x-auto md:overflow-x-hidden overflow-y-hidden p-4 md:pr-8"
    >
      {#each services as service, index}
        <ServiceCard {service} {index} />
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  #sectionC {
    @apply w-full max-w-screen py-16 bg-white;
  }
  h3 {
    font-family: "Merriweather", sans-serif;
  }
  .grid {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: 900px) {
    .grid {
      @apply grid-cols-3;
    }
  }
</style>
