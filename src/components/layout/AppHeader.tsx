import { FC } from "react";

import { Header, Burger, useMantineTheme } from "@mantine/core";

type AppHeaderProps = {
  opened: boolean;
  onClick: () => void;
};

const AppHeader: FC<AppHeaderProps> = ({ opened, onClick }) => {
  return (
    <Header
      height={{ base: 70 }}
      px="sm"
      withBorder={false}
      className="bg-white"
    >
      <div className="flex items-center h-full">
        <Burger
          opened={opened}
          onClick={onClick}
          size="sm"
          mr="xl"
          classNames={{
            root: "xl:hidden text-gray-600",
          }}
        />

        {/* search input */}
      </div>
    </Header>
  );
};
export default AppHeader;
