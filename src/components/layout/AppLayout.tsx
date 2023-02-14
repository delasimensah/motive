import { ReactNode, FC, useState } from "react";
import { AppShell, useMantineColorScheme, Drawer } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useRouter } from "next/router";

import AppHeader from "./AppHeader";
import AppSideNavbar from "./AppSideNavbar";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { width } = useViewportSize();
  const [opened, setOpened] = useState(false);
  const { pathname } = useRouter();
  const showAppLayout = !(pathname === "/sign-up" || pathname === "/sign-in");

  return (
    <>
      {showAppLayout ? (
        <AppShell
          padding="md"
          layout={width < 1279 ? "default" : "alt"}
          classNames={{
            main: `${dark ? "bg-dark" : "bg-[#F5F5F5]"}`,
          }}
          navbarOffsetBreakpoint="xl"
          navbar={<AppSideNavbar hidden={true} breakpoint="xl" />}
          header={
            <AppHeader opened={opened} onClick={() => setOpened((o) => !o)} />
          }
        >
          {children}
        </AppShell>
      ) : (
        <main
          className={`min-h-screen ${
            dark ? "bg-dark" : "bg-[#F5F5F5]"
          } px-5 flex items-center`}
        >
          {children}
        </main>
      )}

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        classNames={{
          drawer: "w-[300px]",
        }}
        overlayOpacity={0.3}
      >
        <AppSideNavbar onClose={() => setOpened(false)} />
      </Drawer>
    </>
  );
};
export default AppLayout;
