export const scrollTop = (nodeTarget) => {
  const targetElement = document.querySelector(`.${nodeTarget}`);
  targetElement.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};
