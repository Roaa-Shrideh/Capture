const filterLinks = document.querySelectorAll(".shuffle a");

const allBoxes = document.querySelectorAll(".imgs-container .box");

filterLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    filterLinks.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");

    const filter = this.getAttribute("data-filter");

    allBoxes.forEach((box) => {
      if (filter === "All") {
        box.style.display = "block";
      } else if (box.getAttribute("data-category") === filter) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
});
