const center = document.querySelector(".center");
const container = document.querySelector(".container");

function init() {
  setTimeout(() => {
    center.style.opacity = 0;
    center.style.display = "none";

    container.style.display = "block";
    setTimeout(() => (container.style.opacity = 1), 50);
  }, 4000);
}

init();
