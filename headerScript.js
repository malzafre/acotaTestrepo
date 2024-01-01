let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    document.querySelector("header").style.top = "-60px"; // Adjust the value based on your header height
  } else {
    // Scrolling up
    document.querySelector("header").style.top = "0";
  }

  lastScrollPosition = currentScrollPosition;
});