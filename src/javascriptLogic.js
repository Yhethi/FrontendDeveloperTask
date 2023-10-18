export const showContainer = () => {
  let containersShow = document.querySelectorAll(".container__show");
  let arrows = document.querySelectorAll(".container__arrow");

  arrows.forEach((arrow, key) => {
    arrow.nonce = "0";
  });
  arrows.forEach((arrow, key) => {
    arrow.addEventListener("click", (e) => {
      if (arrow.nonce == "0") {
        arrow.nonce = "1";
        arrow.style.transform = "rotate(90deg)";
        containersShow[key].style.transform = "rotateX(0deg)";
        containersShow[key].style.height = "auto";
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
  let containerFooterDates = document.querySelectorAll(
    ".container__footer__dates"
  );
  let showDates = document.querySelectorAll(".showDates");
  let showDate = showDates[data.length - 1];
  showDate.addEventListener("click", (e) => {
    if (showDate.nonce == "0") {
      showDate.nonce = "1";
      containerFooterDates[data.length - 1].style.transform = "scale(1)";
    } else if (showDate.nonce == "1") {
      showDate.nonce = "0";
      containerFooterDates[data.length - 1].style.transform = "scale(1)";
    }
  });

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

export const showDate = () => {
  let containerFooterDates = document.querySelectorAll(
    ".container__footer__dates"
  );
  let showDates = document.querySelectorAll(".showDates");
  showDates.forEach((item, key) => {
    item.addEventListener("click", (e) => {
      if (item.nonce == "0") {
        item.nonce = "1";
        containerFooterDates[key].style.transform = "scale(1)";
      } else if (item.nonce == "1") {
        item.nonce = "0";
        containerFooterDates[key].style.transform = "scale(0)";
      }
    });
  });
};
