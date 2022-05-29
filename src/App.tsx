import * as React from 'react';
import {
  ChakraProvider,
  Stack,
} from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import extTheme from './theme/theme';
import Production from './pages/Production';
import Products from './pages/Products';

export default function App() {
  return (
    <ChakraProvider theme={extTheme}>
      <BrowserRouter>
        <Stack direction="row" spacing="0">
          <Sidebar />
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/production" element={<Production />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Stack>
      </BrowserRouter>
    </ChakraProvider>
  );
}
