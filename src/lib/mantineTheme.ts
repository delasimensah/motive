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
    // colors: {
    //   brand: [
    //     "#F0BBDD",
    //     "#ED9BCF",
    //     "#EC7CC3",
    //     "#ED5DB8",
    //     "#F13EAF",
    //     "#F71FA7",
    //     "#FF00A1",
    //     "#E00890",
    //     "#C50E82",
    //     "#AD1374",
    //   ],
    // },
    // primaryColor: "brand",
    // primaryShade: { light: 6, dark: 8 },
  };
};

export default getTheme;
