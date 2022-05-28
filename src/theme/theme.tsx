import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
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
});

export default theme;
