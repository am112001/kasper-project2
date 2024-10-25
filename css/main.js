let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog span");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop + 100) {
    console.log("reached sec three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
let allLi = document.querySelectorAll(".shuffle li");
let imgs = Array.from(document.querySelectorAll(".imgs-container img"));
console.log(imgs);
allLi.forEach((li) => {
  li.addEventListener("click", function () {
    allLi.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  });
  li.addEventListener("click", function () {
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    });
  });
});
