document.addEventListener("DOMContentLoaded", function () {
  const targetElement = document.querySelector(".main__doctors");

  const n1Element = document.getElementById("n1");

  n1Element.addEventListener("click", function () {
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const targetElement = document.querySelector("#button2");

  const n1Element = document.querySelector("#n2");

  n1Element.addEventListener("click", function () {
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const targetElement = document.querySelector(".footer__needs");

  const n1Element = document.getElementById("n3");

  n1Element.addEventListener("click", function () {
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});
