import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Stack,
} from '@chakra-ui/react';
import extTheme from './theme/theme';
import { Sidebar } from './components/sidebar/Sidebar';

export default function App() {
  return (
    <ChakraProvider theme={extTheme}>
      <Box>
        <Stack direction="row">
          <Sidebar />
          <Heading>
            Cereal Management System
          </Heading>
        </Stack>
      </Box>
    </ChakraProvider>
  );
}
