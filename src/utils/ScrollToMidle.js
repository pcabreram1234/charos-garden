const heigth = document.body.clientHeight;
export const ScrollToMidle = (x = heigth / 2) => {
  window.scroll({
    top: x,
    left: 0,
    behavior: "smooth",
  });
};
