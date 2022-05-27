import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        minHeight: "100vh",
        backgroundColor: "white",
        color: "black",
        margin: 0,
      },
    },
  }
})