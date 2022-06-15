const checkboxElem = document.getElementById("theme-toggle");
const theme = localStorage.getItem("theme");

if (theme) {
  document.documentElement.setAttribute("data-theme", "dark");
  if (theme === "dark") {
    checkboxElem.checked = true;
  }
}

checkboxElem.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  }
});
