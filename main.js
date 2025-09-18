(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box", {
    x: 1000,
    rotate: "90",
    opacity: 0,
    // duration: 2,
    scrollTrigger: {
      trigger: ".mv",
      start: "top 0%",
      end: "bottom 50%",
      scrub: true,
      markers: true, // ← これでSTART/ENDが表示される
    },
  });
})();

(() => {
  const mv = document.querySelector(".mv");
  if (!mv) return;

  const START = 0; // フェード開始スクロール量(px)
  const END = 1500; // フェード完了スクロール量(px)  ←調整点
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    const p = Math.min(Math.max((y - START) / (END - START), 0), 1); // 0→1
    mv.style.opacity = (1 - p).toFixed(3);
    ticking = false;
  };

  addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    {passive: true}
  );

  update(); // 初期反映
})();
