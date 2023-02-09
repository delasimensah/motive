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

type AppHeaderProps = {
  opened: boolean;
  onClick: () => void;
};

const AppHeader: FC<AppHeaderProps> = ({ opened, onClick }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const notifications = 1;

  return (
    <Header
      height={{ base: 70 }}
      px="sm"
      withBorder={false}
      className="bg-white"
    >
      <Flex align="center" justify="space-between" className="h-full">
        <Group spacing="md">
          <Burger
            opened={opened}
            onClick={onClick}
            size="sm"
            classNames={{
              root: "xl:hidden text-gray-600",
            }}
          />

          <HeaderSearch />
        </Group>

        <Group spacing="md">
          <ActionIcon
            radius="xl"
            onClick={() => toggleColorScheme()}
            variant="transparent"
            className={`${
              colorScheme === "dark" ? "text-yellow" : "text-dark4 "
            }`}
          >
            {colorScheme === "dark" ? (
              <TbSun size={20} />
            ) : (
              <TbMoonStars size={20} />
            )}
          </ActionIcon>

          <ActionIcon radius="xl">
            <Image
              src={notifications > 0 ? notification : noNotification}
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
