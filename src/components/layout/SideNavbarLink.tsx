import { FC } from "react";
import { Text, Group, useMantineColorScheme } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type SideNavbarLinkProps = {
  link?: string;
  icon: { light: string; dark: string };
  title?: string;
  onClick?: () => void;
};

type NavbarLinkProps = SideNavbarLinkProps;

const NavLink: FC<NavbarLinkProps> = ({ link, onClick, icon, title }) => {
  const { pathname } = useRouter();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const active = link === pathname;
  const bgActiveStyles = dark ? "bg-[#292E3D]" : "bg-[#F3F5F8]";
  const bgInactiveHoverStyles = dark
    ? "hover:bg-[#292E3D]"
    : "hover:bg-[#F3F5F8]";
  const textActiveStyles = dark ? "text-white" : "text-dark2";
  const textInactiveStyles = dark ? "text-dark5" : "text-dark2";
  const activeIcon = dark ? icon.dark : icon.light;

  return (
    <Group
      className={`${
        active
          ? ` ${bgActiveStyles}`
          : `bg-transparent ${bgInactiveHoverStyles}`
      } p-2 rounded-md cursor-pointer mt-2`}
      onClick={onClick}
      spacing="xs"
    >
      <Image
        src={active ? activeIcon : icon.light}
        alt=""
        width={20}
        height={20}
      />

      <Text
        className={`${
          active ? textActiveStyles : textInactiveStyles
        } text-sm font-medium`}
      >
        {title}
      </Text>
    </Group>
  );
};

const SideNavbarLink: FC<SideNavbarLinkProps> = ({
  link,
  icon,
  title,
  onClick,
}) => {
  return (
    <>
      {link === undefined ? (
        <NavLink link={link} onClick={onClick} title={title} icon={icon} />
      ) : (
        <Link passHref href={link}>
          <NavLink link={link} onClick={onClick} title={title} icon={icon} />
        </Link>
      )}
    </>
  );
};

export default SideNavbarLink;
