import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { DM_Sans } from "@next/font/google";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import getTheme from "@lib/mantineTheme";
import { getCookie, setCookie } from "cookies-next";

import "@styles";

const font = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const App = (props: AppProps & { colorScheme: ColorScheme }) => {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = () => {
    const nextColorScheme = colorScheme === "dark" ? "light" : "dark";

    setColorScheme(nextColorScheme);
    setCookie("mantine-color-scheme", nextColorScheme);
  };

  const theme = getTheme(
    colorScheme,
    font.style.fontFamily,
    font.style.fontFamily
  );

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={theme} withGlobalStyles>
        <style jsx global>{`
          html {
            font-family: ${font.style.fontFamily};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${font.style.fontFamily};
          }
        `}</style>

        <DefaultSeo
          title="Motive | Buy and sell cars"
          description="Web application where users can buy and sell cars"
        />

        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

export default App;
