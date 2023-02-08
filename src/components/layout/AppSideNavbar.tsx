import { FC } from "react";
import {
  Navbar,
  Text,
  useMantineTheme,
  MantineNumberSize,
} from "@mantine/core";
import logo from "../../../public/logo (1).svg";
import Image from "next/image";

type AppSideNavbarProps = {
  hidden?: boolean;
  breakpoint?: MantineNumberSize;
};

const AppSideNavbar: FC<AppSideNavbarProps> = ({ hidden, breakpoint }) => {
  return (
    <Navbar
      height="100vh"
      hiddenBreakpoint={breakpoint}
      hidden={hidden}
      width={{ base: 250 }}
      className="border-r border-r-[#F5F5F5] bg-white pl-[24px] pr-[50px]"
    >
      <div className="h-[70px] pt-[30px]">
        <Image src={logo} alt="" width={100} height={30} />
      </div>

      <Navbar.Section grow className="pt-5">
        <Text>Dashboard</Text>
        <Text>Assets</Text>
        <Text>Booking</Text>
        <Text>Sell Car</Text>
        <Text>Buy Car</Text>
        <Text>Services</Text>
        <Text>Calendar</Text>
        <Text>Messages</Text>
      </Navbar.Section>

      <Navbar.Section>
        <Text>Settings</Text>
        <Text>Logout</Text>
      </Navbar.Section>
    </Navbar>
  );
};
export default AppSideNavbar;
