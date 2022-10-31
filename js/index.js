// dark mode button

const buttonDarkMode = document.querySelector('[data-js="buttonDarkMode"]');
const main = document.querySelector('[data-js="main"]');

buttonDarkMode.addEventListener("click", () => {
  main.classList.toggle("darkMode");
});

// buttons for Vancouver image in footer
const vancouverImage = document.querySelector(".Vancouver");
const buttonGray = document.querySelector('[data-js="buttonGrayscale"]');
const buttonFade = document.querySelector('[data-js="buttonFade"]');
const buttonContrast = document.querySelector('[data-js="buttonContrast"]');
const buttonBlur = document.querySelector('[data-js="buttonBlur"]');
const buttonSaturation = document.querySelector('[data-js="buttonSaturation"]');
const buttonOriginal = document.querySelector('[data-js="buttonOriginal"]');

buttonGray.addEventListener("click", () => {
  vancouverImage.classList.add("grayscale");
  vancouverImage.classList.remove("fade", "contrast", "blur", "saturation");
});

buttonFade.addEventListener("click", () => {
  vancouverImage.classList.add("fade");
  vancouverImage.classList.remove(
    "grayscale",
    "contrast",
    "blur",
    "saturation"
  );
});

buttonContrast.addEventListener("click", () => {
  vancouverImage.classList.add("contrast");
  vancouverImage.classList.remove("grayscale", "fade", "blur", "saturation");
});

buttonBlur.addEventListener("click", () => {
  vancouverImage.classList.add("blur");
  vancouverImage.classList.remove(
    "grayscale",
    "fade",
    "contrast",
    "saturation"
  );
});

buttonSaturation.addEventListener("click", () => {
  vancouverImage.classList.add("saturation");
  vancouverImage.classList.remove("grayscale", "fade", "contrast", "blur");
});

buttonOriginal.addEventListener("click", () => {
  vancouverImage.classList.remove(
    "grayscale",
    "fade",
    "contrast",
    "blur",
    "saturation"
  );
});
