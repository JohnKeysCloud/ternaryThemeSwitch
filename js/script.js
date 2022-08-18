const themeSelect = document.getElementById('themeSelect');
const body = document.querySelector('body');
const headingInject = document.getElementById('headingInject');

headingInject.textContent = `This is the ${themeSelect.value} theme`;

function update(bgColor, textColor) {
  body.style.backgroundColor = bgColor;
  body.style.color = textColor;
}

themeSelect.addEventListener("change", themeSwitch);

function themeSwitch() {
  themeSelect.value === "dark"
    ? update("#2a222d", "#E967CB")
    : update("#B485D8", "#FFFCE8");
  
  if (themeSelect.value === "dark") {
    themeSelect.style.color = "#E967CB";
    themeSelect.style.backgroundColor = "white";
    headingInject.textContent = `This is the ${themeSelect.value} theme`;
  } else {
    themeSelect.style.color = "black";
    themeSelect.style.backgroundColor = "#FFFCE8";
    headingInject.textContent = `This is the ${themeSelect.value} theme`;
  }
}