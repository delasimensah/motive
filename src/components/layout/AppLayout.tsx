import { ReactNode, FC, useState } from "react";
import { AppShell, useMantineColorScheme, Drawer, Navbar } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import AppHeader from "./AppHeader";
import AppSideNavbar from "./AppSideNavbar";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const { colorScheme } = useMantineColorScheme();
  const { width } = useViewportSize();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AppShell
        padding="md"
        layout={width < 1279 ? "default" : "alt"}
        classNames={{
          main: `${colorScheme === "dark" ? "bg-gray-800" : "bg-[#F5F5F5]"}`,
        }}
        navbarOffsetBreakpoint="xl"
        navbar={<AppSideNavbar hidden={true} breakpoint="xl" />}
        header={
          <AppHeader opened={opened} onClick={() => setOpened((o) => !o)} />
        }
      >
        {children}
      </AppShell>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        classNames={{
          drawer: "w-[250px]",
        }}
        overlayOpacity={0.3}
      >
        <AppSideNavbar />
      </Drawer>
    </>
  );
};
export default AppLayout;
