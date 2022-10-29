import { extendTheme } from "native-base";

export const DARK = extendTheme({
  colors: {
    primary: {
      700: "#3475cc",
      600: "#4193FF",
      100: "#8dbeff",
    },
    background: "#29292E",
    text: "#fdfdfd",
    secondary: {
      700: "#AFB1B0",
    },
    button: {
      700: "#ffad41",
    },
    green: {
      700: "#00875F",
      500: "#00B37E",
      300: "#04D361",
    },
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56,
  },
});
