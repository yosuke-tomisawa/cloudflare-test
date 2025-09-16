document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".panel", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".panel",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      markers: true, // ← これでSTART/ENDが表示される
    },
  });
});
