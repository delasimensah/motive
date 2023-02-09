import { FC } from "react";
import Image from "next/image";
import {
  Header,
  Burger,
  Flex,
  Group,
  Avatar,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { TbSun, TbMoonStars } from "react-icons/tb";
import HeaderSearch from "./HeaderSearch";

// icons
import notification from "@assets/icons/header/notification.svg";
import noNotification from "@assets/icons/header/no-notification.svg";
import notificationDark from "@assets/icons/header/notification-dark.svg";
import noNotificationDark from "@assets/icons/header/no-notification-dark.svg";

type AppHeaderProps = {
  opened: boolean;
  onClick: () => void;
};

const AppHeader: FC<AppHeaderProps> = ({ opened, onClick }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const notifications = 1;
  const icon =
    notifications > 0
      ? dark
        ? notificationDark
        : notification
      : dark
      ? noNotificationDark
      : noNotification;

  return (
    <Header
      height={{ base: 70 }}
      px="sm"
      withBorder={false}
      className={`${dark ? "bg-dark1" : "bg-white"}`}
    >
      <Flex align="center" justify="space-between" className="h-full">
        <Group spacing="xs">
          <Burger
            opened={opened}
            onClick={onClick}
            size="sm"
            classNames={{
              root: `xl:hidden`,
            }}
          />

          <HeaderSearch />
        </Group>

        <Group spacing="md">
          <ActionIcon
            radius="xl"
            onClick={() => toggleColorScheme()}
            variant="transparent"
            className={`${dark ? "text-yellow" : "text-dark4 "}`}
          >
            {dark ? <TbSun size={20} /> : <TbMoonStars size={20} />}
          </ActionIcon>

          <ActionIcon radius="xl">
            <Image
              src={icon}
              alt=""
              width={16}
              height={20}
              className="cursor-pointer"
            />
          </ActionIcon>

          <Avatar
            radius="xl"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          />
        </Group>
      </Flex>
    </Header>
  );
};
export default AppHeader;
