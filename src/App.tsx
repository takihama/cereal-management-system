import * as React from 'react';
import { Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';

export default function App() {
  return (
    <Stack direction="row" spacing="0">
      <Sidebar />
      <Outlet />
    </Stack>
  );
}
