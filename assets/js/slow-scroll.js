document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetID = this.getAttribute("href");
      if (targetID === "#") {
        // Scroll to top
        e.preventDefault();
        smoothScrollTo(0, 6000); // 🔧 1000ms = 1 second
        return;
      }
  
      const target = document.querySelector(targetID);
      if (!target) return;
  
      e.preventDefault();
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      smoothScrollTo(targetPosition, 6000); // 🔧 Adjust duration here (ms)
    });
  });
  
  function smoothScrollTo(targetY, duration) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;
  
    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * ease);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
  
    function easeInOutCubic(t) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
  
    requestAnimationFrame(animation);
  }
  