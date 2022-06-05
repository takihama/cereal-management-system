import { ComponentStyleConfig } from '@chakra-ui/react';

const ButtonTheme: ComponentStyleConfig = {
  baseStyle: {
    _focus: {
      boxShadow: 'none',
    },
  },
  variants: {
    solid: {
      bg: 'primary.100',
      _hover: {
        bg: 'primary.300',
      },
    },
    cancel: {
      bg: 'gray.100',
      _hover: {
        bg: 'gray.300',
      },
    },
  },
};

export default ButtonTheme;
