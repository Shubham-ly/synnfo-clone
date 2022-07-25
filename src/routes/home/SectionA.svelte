<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import Anim1 from "./sectionA-anims/Anim1.svelte";
  import Anim2 from "./sectionA-anims/Anim2.svelte";
  import Anim3 from "./sectionA-anims/Anim3.svelte";

  onMount(() => {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll("#sectionA");
    const titles = document.querySelectorAll(".section-title");
    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        titles[i].classList.remove("fade-in");
        titles[i].classList.add("fade-out");
        slides[i].style.display = "none";
        slides[i].style.opacity = 0;
        slides[i].querySelector("#anim").stop();
      }
      currentSlideIndex++;
      if (currentSlideIndex > slides.length) currentSlideIndex = 1;
      slides[currentSlideIndex - 1].style.display = "block";
      slides[currentSlideIndex - 1].style.opacity = 1;
      titles[currentSlideIndex - 1].classList.remove("fade-out");
      titles[currentSlideIndex - 1].classList.add("fade-in");
      slides[currentSlideIndex - 1].querySelector("#anim").play();
      setTimeout(showSlides, 7000);
    }
    showSlides();
  });
</script>

<div>
  <Anim1 />
  <Anim2 />
  <Anim3 />
</div>
