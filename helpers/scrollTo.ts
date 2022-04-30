export default (location: string) => {
  document.getElementById(location)!.scrollIntoView({ behavior: "smooth" });
};
