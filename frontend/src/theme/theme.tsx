import { extendTheme, theme } from '@chakra-ui/react';
import ButtonTheme from './components/Button.theme';

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
  components: {
    Button: ButtonTheme,
  },
});

export default extTheme;
