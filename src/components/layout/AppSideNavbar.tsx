import { FC } from "react";
import { Navbar, MantineNumberSize } from "@mantine/core";
import logo from "@assets/logo-full.svg";
import Image from "next/image";

//  icons
import dashboard from "@assets/icons/sidenav/dashboard.svg";
import assets from "@assets/icons/sidenav/assets.svg";
import booking from "@assets/icons/sidenav/booking.svg";
import sell from "@assets/icons/sidenav/sell.svg";
import buy from "@assets/icons/sidenav/buy.svg";
import services from "@assets/icons/sidenav/services.svg";
// import calendar from "@assets/icons/sidenav/calendar.svg";
// import messages from "@assets/icons/sidenav/messages.svg";
import settings from "@assets/icons/sidenav/settings.svg";
import logout from "@assets/icons/sidenav/logout.svg";

import SideNavbarLink from "./SideNavbarLink";

type AppSideNavbarProps = {
  hidden?: boolean;
  breakpoint?: MantineNumberSize;
  onClose?: () => void;
};

// sidebar links
const links = {
  top: [
    {
      link: "/",
      title: "Dashboard",
      icon: dashboard,
    },
    {
      link: "/assets",
      title: "Assets",
      icon: assets,
    },
    {
      link: "/booking",
      title: "Booking",
      icon: booking,
    },
    {
      link: "/sell-car",
      title: "Sell Car",
      icon: sell,
    },
    {
      link: "/buy-car",
      title: "Buy Car",
      icon: buy,
    },
    {
      link: "/services",
      title: "Services",
      icon: services,
    },
    // {
    //   link: "/calendar",
    //   title: "Calendar",
    //   icon: calendar,
    // },
    // {
    //   link: "/messages",
    //   title: "Messages",
    //   icon: messages,
    // },
  ],
  bottom: [
    {
      link: "/settings",
      title: "Settings",
      icon: settings,
    },
  ],
};

const AppSideNavbar: FC<AppSideNavbarProps> = ({
  hidden,
  breakpoint,
  onClose,
}) => {
  return (
    <Navbar
      height="100vh"
      hiddenBreakpoint={breakpoint}
      hidden={hidden}
      width={{ base: 300 }}
      className="border-r border-r-[#F5F5F5] bg-white pl-[24px] pr-[50px] pb-[25px]"
    >
      <div className="h-[70px] pt-[30px]">
        <Image src={logo} alt="" width={100} height={30} />
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
          icon={logout}
          title="Log out"
        />
      </Navbar.Section>
    </Navbar>
  );
};
export default AppSideNavbar;
