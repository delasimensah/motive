import { FC } from "react";
import {
  Navbar,
  MantineNumberSize,
  useMantineColorScheme,
} from "@mantine/core";
import logo from "@assets/logo-full.svg";
import logoWhite from "@assets/logo-full-white.svg";
import Image from "next/image";
import links from "./sidebarLinks";

import logout from "@assets/icons/sidenav/logout.svg";

import SideNavbarLink from "./SideNavbarLink";

type AppSideNavbarProps = {
  hidden?: boolean;
  breakpoint?: MantineNumberSize;
  onClose?: () => void;
};

const AppSideNavbar: FC<AppSideNavbarProps> = ({
  hidden,
  breakpoint,
  onClose,
}) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Navbar
      height="100vh"
      hiddenBreakpoint={breakpoint}
      hidden={hidden}
      width={{ base: 300 }}
      className={`border-r pl-[24px] pr-[50px] pb-[25px] ${
        dark ? "bg-dark1 border-r-dark" : "border-r-[#F5F5F5] bg-white"
      }`}
    >
      <div className="h-[70px] pt-[30px]">
        <Image src={dark ? logoWhite : logo} alt="" width={100} height={30} />
      </div>

      <Navbar.Section grow className="pt-3">
        {links.top.map((link, idx) => {
          return (
            <SideNavbarLink
              key={idx}
              link={link.link}
              icon={link.icon}
              title={link.title}
              onClick={onClose}
            />
          );
        })}
      </Navbar.Section>

      <Navbar.Section>
        {links.bottom.map((link, idx) => {
          return (
            <SideNavbarLink
              key={idx}
              link={link.link}
              icon={link.icon}
              title={link.title}
              onClick={onClose}
            />
          );
        })}

        <SideNavbarLink
          onClick={() => console.log("logout")}
          icon={{ light: logout, dark: logout }}
          title="Log out"
        />
      </Navbar.Section>
    </Navbar>
  );
};
export default AppSideNavbar;
