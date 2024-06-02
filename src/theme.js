import { extendTheme } from "@chakra-ui/react";

// Definição de cores personalizadas e tokens de estilo
const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#e3f2f9",
      100: "#c5e4f3",
      200: "#a2d4ec",
      300: "#7ac1e4",
      400: "#47a9da",
      500: "#0088cc", // Cor principal
      600: "#007ab8",
      700: "#006ba1",
      800: "#005885",
      900: "#003f5e",
    },
  },
  fonts: {
    heading: "Arial, sans-serif",
    body: "Roboto, sans-serif",
  },
  space: {
    1: "4px",
    2: "8px",
    3: "16px",
    4: "32px",
    5: "64px",
  },
});

export default customTheme;
