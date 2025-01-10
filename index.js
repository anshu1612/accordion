const icons = document.querySelectorAll("img");
const contents = document.querySelectorAll("p");
const content3 = document.getElementById("content3");
let i = 0;
icons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    contents.forEach((text, i) => {
      if (i != index) {
        text.classList.add("hidden");
        icons[i].classList.remove("rotate-90");
      }
    });

    let content = contents[index];
    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-90");
    document.getElementById("div3").classList.remove("rounded-b-lg");
    content3.classList.add("rounded-b-lg");
  });
});
