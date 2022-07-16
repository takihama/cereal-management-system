import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import extTheme from './theme/theme';
import Dashboard from './pages/Dashboard';
import ProductionOrders from './pages/ProductionOrders/ProductionOrders';
import Products from './pages/Products';
import RawMaterials from './pages/RawMaterials';
import ProductionOrder from './pages/ProductionOrders/ProductionOrder';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={extTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="productionOrders" element={<ProductionOrders />} />
          <Route path="productionOrders/:productionOrderId" element={<ProductionOrder />} />
          <Route path="products" element={<Products />} />
          <Route path="rawmaterials" element={<RawMaterials />} />
          <Route path="*" element={(<p>There is nothing here!</p>)} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
);
