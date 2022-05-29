import React from 'react';
import { Box } from '@chakra-ui/react';

type CardProps = {
  children?: JSX.Element,
};

export default function Card({ children }: CardProps) {
  return (
    <Box maxWidth="md" borderWidth="1px" borderRadius="lg" padding="4" boxShadow="base">
      {children}
    </Box>
  );
}
