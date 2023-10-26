import React from "react";
import { Link } from "gatsby";

import Logo from "../images/logos/dymars.svg";
import Button from "./button";

const Header = () => {
  const navigation = [
    { name: "Pemesanan", href: "/booking" },
    { name: "Contact", href: "/contact" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
              <img className="h-22 w-auto" src={Logo} alt="Logo" />
            </Link>{" "}
          </div>{" "}
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {" "}
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4"
                >
                  {" "}
                  {item.name}{" "}
                </a>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default Header;
