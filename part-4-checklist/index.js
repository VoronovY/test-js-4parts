const checkboxesContainer = document.querySelector(
  "[data-checkboxes-conainer]"
);
const checkboxes = document.querySelectorAll("[data-checkbox]");
const boxesContainer = document.querySelector("[data-boxes-conainer]");
const checkBoxHideAll = document.querySelector("[data-checkbox-all]");
const allBoxes = document.querySelectorAll("[data-box]");

checkboxesContainer.addEventListener("change", function (e) {
  if (e.target.dataset.checkboxAll === "0" && checkBoxHideAll.checked) {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        continue;
      } else {
        checkboxes[i].checked = "checked";
      }
    }
  }
  if (e.target.dataset.checkboxAll === "0" && !checkBoxHideAll.checked) {
    for (let i = 0; i < checkboxes.length; i++) {
      if (!checkboxes[i].checked) {
        continue;
      } else {
        checkboxes[i].checked = false;
      }
    }
  }
  checkboxes.forEach((el) => {
    const boxNumber = el.dataset.checkbox;
    const curBox = document.querySelector(`[data-box='${boxNumber}']`);
    if (el.checked) {
      curBox.classList.add("boxes__box_hidden");
    } else if (!el.checked && curBox.classList.contains("boxes__box_hidden")) {
      curBox.classList.remove("boxes__box_hidden");
    }
  });
  let countOfChecked = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      countOfChecked += 1;
    }
  }

  if (countOfChecked === 10 && !checkBoxHideAll.checked) {
    checkBoxHideAll.checked = "checked";
  } else if (countOfChecked !== 10 && checkBoxHideAll.checked) {
    checkBoxHideAll.checked = false;
  }
});
