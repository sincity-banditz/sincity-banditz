export default (location: string) => {
  window.scrollTo({
    // Top = element offset - navbar height
    top: document.getElementById(location)!.offsetTop - 64,
    behavior: "smooth",
  });
};
