import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import extTheme from './theme/theme';
import Dashboard from './pages/Dashboard';
import Production from './pages/Production';
import Products from './pages/Products';
import RawMaterials from './pages/RawMaterials';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={extTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/production" element={<Production />} />
          <Route path="/products" element={<Products />} />
          <Route path="/rawmaterials" element={<RawMaterials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
);
