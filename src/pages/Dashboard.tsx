import React from 'react';
import { Stack } from '@chakra-ui/react';
import { MdDashboard } from 'react-icons/md';
import Header from '../components/header/Header';

export default function Dashboard() {
  return (
    <Stack width="full">
      <Header
        title="Dashboard"
        icon={MdDashboard}
        search={null}
        buttons={[]}
      />
    </Stack>
  );
}
