// Libraries
import Image from "next/image";

// Components
import Wrapper from "@/Components/UIKit/Wrapper/Wrapper";

// Logo
import altLogo from "@/Assets/logos/altLogo.png";

// Styles
import Style from "./Footer.module.css";
import Link from "next/link";

interface FooterData {
  title: string;
  links: {
    linkTitle: string;
    href: string;
  }[];
}

const data: FooterData[] = [
  {
    title: "Landings",
    links: [
      {
        linkTitle: "Home",
        href: "/",
      },
      {
        linkTitle: "Products",
        href: "/products",
      },
      {
        linkTitle: "Services",
        href: "/services",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        linkTitle: "Home",
        href: "/",
      },
      {
        linkTitle: "Products",
        href: "/products",
      },
      {
        linkTitle: "Services",
        href: "/services",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        linkTitle: "Home",
        href: "/",
      },
      {
        linkTitle: "Products",
        href: "/products",
      },
      {
        linkTitle: "Services",
        href: "/services",
      },
    ],
  },
];

interface LinksWrapperProps {
  title: string;
  links: {
    linkTitle: string;
    href: string;
  }[];
}

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div className={Style.footerGrid}>
        <div className={Style.logoWraper}>
          <Image src={altLogo} alt="" />
          <h6>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </h6>
        </div>
        {data.map((item, index) => {
          return (
            <LinksWrapper key={index} title={item.title} links={item.links} />
          );
        })}
      </div>
      <h6 className={Style.rights}>All rights reserved.</h6>
    </Wrapper>
  );
};

const LinksWrapper: React.FC<LinksWrapperProps> = ({ title, links }) => {
  return (
    <div className={Style.linksWrapper}>
      <h4>{title}</h4>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.href}>
            {link.linkTitle}
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
