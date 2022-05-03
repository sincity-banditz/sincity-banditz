import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import scrollTo from "helpers/scrollTo";
import { navigation } from "helpers/constants";

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full bg-neutral-800/90">
      <Disclosure
        as="div"
        className="flex items-center justify-between container h-16"
      >
        <Image
          src="/images/logo.png"
          className="hover:brightness-125 transition cursor-pointer"
          onClick={() => scrollTo("welcome")}
          width={48}
          height={48}
          priority
        />

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-x-4">
          {navigation.map((item) => (
            <li
              key={item.name}
              className="btn-neutral text-neutral-200"
              onClick={() => scrollTo(item.location)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <Disclosure.Button as="button" className="md:hidden btn-neutral p-2">
          <MenuIcon className="h-6 w-6" />
        </Disclosure.Button>
        <Disclosure.Panel
          as="ul"
          className="absolute left-0 top-full md:hidden w-full"
        >
          {navigation.map((item) => (
            <li
              key={item.name}
              className="btn-neutral rounded-none bg-neutral-800/90"
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
