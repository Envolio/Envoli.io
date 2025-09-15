"use strict";

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("scrollmenu", window.scrollY > 105);
});
//# sourceMappingURL=main.dev.js.map
