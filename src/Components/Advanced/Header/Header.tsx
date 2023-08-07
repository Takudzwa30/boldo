"use client";

// Libraries
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Hooks
import useWindowSize from "@/hooks/useWindowSize";

// Icons
import logo from "@/Assets/logos/Logo.png";

//Styles
import Style from "./Header.module.css";

// Types
interface navProps {
  key: number;
  title: string;
  path: string;
  setMenuOpen: (val: boolean) => void;
}

interface NavItem {
  title: string;
  path: string;
}

// Data
const navData = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Blogs", path: "/blog" },
];
export default function Header() {
  // Variables
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const windowSize = useWindowSize();
  const { width } = windowSize;

  return (
    <header className={Style.header}>
      <div
        className={width && width > 1440 ? Style.navbar : Style.navbarMobile}
      >
        <Link href="/">
          <Image src={logo} alt="My Image" className={Style.logo} />
        </Link>
        <nav
          className={
            width && width > 768
              ? Style.navigator
              : menuOpen
              ? Style.navigator
              : Style.navigatorClose
          }
        >
          <ul className={Style.menuList}>
            {navData.map((item: NavItem, index: number) => {
              return (
                <LinksDropDown
                  key={index}
                  {...item}
                  setMenuOpen={setMenuOpen}
                />
              );
            })}
          </ul>
        </nav>

        <div
          className={menuOpen ? Style.hamburgerActive : Style.hamburger}
          onClick={() => {
            setMenuOpen((old: boolean) => !old);
            document.documentElement.scrollTop = 0;
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

const LinksDropDown = ({ title, path, setMenuOpen }: navProps) => {
  // Variables
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li>
      <Link
        onClick={() => {
          setMenuOpen(true);
          document.documentElement.scrollTop = 0;
        }}
        className={isActive ? Style.pageActive : ""}
        href={path}
      >
        {title}
      </Link>
    </li>
  );
};
