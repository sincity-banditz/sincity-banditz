import { Disclosure } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import scrollTo from "../helpers/scrollTo";
import Logo from "../public/images/logo.svg";

const navigation = [
  { name: "Home", location: "welcome" },
  { name: "Team", location: "team" },
  { name: "Projects", location: "#" },
  { name: "Contact", location: "#" },
];

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full bg-neutral-800/80 backdrop-blur-lg">
      <Disclosure
        as="div"
        className="container flex items-center justify-between h-16"
      >
        <Logo
          className="fill-brand-200 hover:fill-brand-100 transition-colors cursor-pointer"
          onClick={() => scrollTo("welcome")}
        />
        <ul className="hidden md:flex items-center gap-x-4">
          {navigation.map((item) => (
            <li
              className="btn-neutral text-neutral-100"
              key={item.name}
              onClick={() => scrollTo(item.location)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <Disclosure.Button
          as="button"
          className="md:hidden btn-neutral p-2 text-neutral-100"
        >
          <MenuIcon className="h-6 w-6" />
        </Disclosure.Button>
        <Disclosure.Panel
          as="ul"
          className="absolute left-0 top-full block md:hidden w-full bg-neutral-800/90 backdrop-blur-lg"
        >
          {navigation.map((item) => (
            <li
              className="btn-neutral rounded-none bg-transparent text-neutral-100"
              key={item.name}
              onClick={() => scrollTo(item.location)}
            >
              {item.name}
            </li>
          ))}
        </Disclosure.Panel>
      </Disclosure>
    </nav>
  );
};

export default Navbar;
