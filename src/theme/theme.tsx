import { extendTheme, theme } from '@chakra-ui/react';

const extTheme = extendTheme({
  styles: {
    global: {
      body: {
        minHeight: '100vh',
        backgroundColor: 'white',
        color: 'black',
        margin: 0,
      },
    },
  },
  colors: {
    primary: {
      ...theme.colors.purple,
    },
  },
});

export default extTheme;
