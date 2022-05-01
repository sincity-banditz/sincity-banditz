import * as yup from "yup";
import { HeartIcon, GlobeIcon, PencilAltIcon } from "@heroicons/react/outline";

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

export const points = [
  {
    text: "You will need to be great at teamwork. You must treat everyone with up-most respect.",
    Icon: HeartIcon,
  },
  {
    text: "You will need to stand out from the rest and have awesome creativity!",
    Icon: GlobeIcon,
  },
  {
    text: "You will need to be able to take the drivers seat and get work done when requested.",
    Icon: PencilAltIcon,
  },
];

export const joinInitialValues = {
  username: "",
  age: undefined,
  email: "",
  experience: "",
};

export const joinValidationSchema = yup.object().shape({
  username: yup.string().required(),
  age: yup.number().required().min(12),
  email: yup.string().required().email(),
  experience: yup.string().required().min(30),
});
