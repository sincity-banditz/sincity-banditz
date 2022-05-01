import * as yup from "yup";

export const navigation = [
  { name: "Home", location: "welcome" },
  { name: "Team", location: "team" },
  { name: "Join", location: "join" },
];

export const members = [
  { name: "Gigantic", avatar: "gigantic.jpg", role: "Captain" },
  { name: "Brandan", avatar: "brandan.png", role: "Sniper" },
  { name: "Minny", avatar: "minny.webp", role: "Anything" },
  { name: "Unspeakable", avatar: "unspekable.webp", role: "Trainer" },
  { name: "Leroy", avatar: "brandan.png", role: "Something" },
];

export const joinInitialValues = {
  username: "",
  age: 0,
  email: "",
  experience: "",
};

export const joinValidationSchema = yup.object().shape({
  username: yup.string().required(),
  age: yup.number().required().min(12),
  email: yup.string().required().email(),
  experience: yup.string().required().min(30),
});
