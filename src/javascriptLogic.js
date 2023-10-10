export const showContainer = () => {
  let containersShow = document.querySelectorAll(".container__show");
  let arrows = document.querySelectorAll(".container__arrow");
  arrows.forEach((arrow, key) => {
    arrow.addEventListener("click", (e) => {
      if (arrow.nonce == "0") {
        arrow.nonce = "1";
        arrow.style.transform = "rotate(90deg)";
        containersShow[key].style.transform = "rotateX(0deg)";
        containersShow[key].style.height = "100px";
        containersShow[key].style.padding = "15px";
      } else if (arrow.nonce == "1") {
        arrow.nonce = "0";
        arrow.style.transform = "rotate(0deg)";
        containersShow[key].style.transform = "rotateX(90deg)";
        containersShow[key].style.height = "0px";
        containersShow[key].style.padding = "0px";
      }
    });
  });
};

export const showAddRow = () => {
  const form = document.querySelector(".formData");
  const buttonShow = document.querySelector(".buttonShow");
  buttonShow.addEventListener("click", () => {
    if (form.nonce == "0") {
      form.nonce = "1";
      form.style.transform = "rotateX(0deg)";
      form.style.height = "110px";
    } else if (form.nonce == "1") {
      form.nonce = "0";
      form.style.transform = "rotateX(90deg)";
      form.style.height = "0px";
    }
  });
};

export const setAnimation = (data) => {
  let containersA = document.querySelectorAll(".container__show");
  let arrowsA = document.querySelectorAll(".container__arrow");
  let arrowA = arrowsA[data.length - 1];
  arrowA.addEventListener("click", (e) => {
    if (arrowA.nonce == "0") {
      arrowA.nonce = "1";
      arrowA.style.transform = "rotate(90deg)";
      containersA[data.length - 1].style.transform = "rotateX(0deg)";
      containersA[data.length - 1].style.height = "100px";
      containersA[data.length - 1].style.padding = "15px";
    } else if (arrowA.nonce == "1") {
      arrowA.nonce = "0";
      arrowA.style.transform = "rotate(0deg)";
      containersA[data.length - 1].style.transform = "rotateX(90deg)";
      containersA[data.length - 1].style.height = "0px";
      containersA[data.length - 1].style.padding = "0px";
    }
  });
};
