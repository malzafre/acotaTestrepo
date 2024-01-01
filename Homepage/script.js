const slider = document.querySelector('.slider');
const controls = document.querySelectorAll('.controls li');
let sectionIndex = 0;

function goToSlide(index) {
  slider.style.transform = `translate(${index * -20}%)`;

  // Update the indicator for the currently displayed slide
  controls.forEach((indicator, i) => {
    indicator.classList.remove('selected');
    if (i === index) {
      indicator.classList.add('selected');
    }
  });
}

function nextSlide() {
  sectionIndex = (sectionIndex + 1) % controls.length;
  goToSlide(sectionIndex);
}

function startAutoPlay() {
  setInterval(nextSlide, 6000); // Change slide every 6 seconds
}

controls.forEach((indicator, index) => {
  indicator.addEventListener('click', function () {
    sectionIndex = index;
    goToSlide(sectionIndex);
  });
});

startAutoPlay();

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-1 .carousel");
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.transition = 'none'; // Remove transition during manual scroll
  });

  container.addEventListener("mouseleave", () => {
    isMouseDown = false;
    container.style.transition = 'transform 0.5s ease-in-out'; // Restore transition on mouse leave
  });

  container.addEventListener("mouseup", () => {
    isMouseDown = false;
    container.style.transition = 'transform 0.5s ease-in-out'; // Restore transition on mouse up
  });

  container.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // You can adjust the multiplier for a faster/slower scroll
    container.scrollLeft = scrollLeft - walk;
  });

  // Mouse wheel scroll
  container.addEventListener("wheel", (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY * 0.5; // You can adjust the multiplier for a faster/slower scroll
  });
});

function goBack() {
  window.history.back();
}