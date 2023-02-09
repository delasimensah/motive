import { FC } from "react";
import { ActionIcon, Button, useMantineColorScheme } from "@mantine/core";
import { SpotlightProvider, openSpotlight } from "@mantine/spotlight";
import type { SpotlightAction } from "@mantine/spotlight";
import Image from "next/image";

// icons
import search from "@assets/icons/header/search.svg";

type HeaderSearchProps = {};

const actions: SpotlightAction[] = [];

const HeaderSearch: FC<HeaderSearchProps> = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<Image src={search} alt="" width={15} height={15} />}
      searchPlaceholder="Search"
      nothingFoundMessage="Nothing found..."
      radius={8}
      classNames={{
        root: "px-5",
        searchInput: `caret-orange ${
          dark ? "bg-[#1F2128]" : "bg-[#F5F4F6]"
        } text-dark4 font-medium text-base`,
      }}
    >
      <ActionIcon
        radius="xl"
        className="lg:hidden"
        onClick={() => openSpotlight()}
      >
        <Image src={search} alt="" width={15} height={15} />
      </ActionIcon>

      <Button
        onClick={() => openSpotlight()}
        leftIcon={<Image src={search} alt="" width={15} height={15} />}
        classNames={{
          root: `w-[350px] ${
            dark
              ? "bg-[#1F2128] hover:bg-[#1F2128]"
              : "bg-[#F5F4F6] hover:bg-[#F5F4F6]"
          } text-dark4 font-medium hidden lg:flex`,
          inner: "justify-start",
        }}
        radius={8}
      >
        Search
      </Button>
    </SpotlightProvider>
  );
};
export default HeaderSearch;
