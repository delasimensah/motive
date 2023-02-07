import { MantineThemeOverride, ColorScheme } from "@mantine/core";

const getTheme = (
  colorScheme: ColorScheme,
  fontFamily: string,
  headerFontFamily: string
): MantineThemeOverride => {
  return {
    colorScheme,
    fontFamily,
    headings: {
      fontFamily: headerFontFamily,
      fontWeight: 700,
      sizes: {
        h1: {
          fontSize: 30,
        },
        h2: {
          fontSize: 24,
        },
        h3: {
          fontSize: 20,
        },
      },
    },
  };
};

export default getTheme;
