import { FC } from "react";
import { Text, Group } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type SideNavbarLinkProps = {
  link?: string;
  icon: string;
  title?: string;
  onClick?: () => void;
};

type NavbarLinkProps = {
  link?: string;
  icon: string;
  title?: string;
  onClick?: () => void;
};

const NavLink: FC<NavbarLinkProps> = ({ link, onClick, icon, title }) => {
  const { pathname } = useRouter();
  const active = link === pathname;

  return (
    <Group
      className={`${
        active ? "bg-[#F3F5F8]" : "bg-transparent"
      } p-2 rounded-md cursor-pointer`}
      onClick={onClick}
      spacing="xs"
    >
      <Image src={icon} alt="" width={20} height={20} />
      <Text>{title}</Text>
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
