const navLinks = document.querySelectorAll(".main-nav a");

const autoBtn = navLinks[0];
const darkBtn = navLinks[1];
const lightBtn = navLinks[2];

autoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.remove("dark", "light");
});

darkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.remove("light");
  document.body.classList.add("dark");
});

lightBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.remove("dark");
  document.body.classList.add("light"); // keep this
}); 