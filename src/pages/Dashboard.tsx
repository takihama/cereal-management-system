import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { MdDashboard } from 'react-icons/md';
import Header from '../components/header/Header';
import OEECard from '../components/card/OEECard';
import Card from '../components/card/Card';

export default function Dashboard() {
  const oee = {
    title: { name: 'Overall OEE', value: 84.15, unit: '%' },
    data: [{
      name: 'Availability',
      value: 91.93,
      unit: '%',
    },
    {
      name: 'Performance',
      value: 96.36,
      unit: '%',
    },
    {
      name: 'Quality',
      value: 95,
      unit: '%',
    },
    ],
    color: 'primary.800',
  };
  const availability = {
    title: { name: 'Availability', value: 91.93, unit: '%' },
    data: [{
      name: 'Planned runtime',
      value: 3840,
      unit: 'mins',
    },
    {
      name: 'Actual runtime',
      value: 3530,
      unit: 'mins',
    },
    {
      name: 'Unplanned downtime',
      value: 310,
      unit: 'mins',
    },
    ],
    color: 'orange.800',
  };
  const performance = {
    title: { name: 'Performance', value: 96.36, unit: '%' },
    data: [{
      name: 'Planned quality',
      value: 81000,
      unit: '',
    },
    {
      name: 'Actual quality',
      value: 78050,
      unit: '',
    },
    ],
    color: 'green.800',
  };
  const quality = {
    title: { name: 'Quality', value: 96.36, unit: '%' },
    data: [{
      name: 'Actual quality',
      value: 78050,
      unit: '',
    },
    {
      name: 'Rejected quality',
      value: 3900,
      unit: '',
    },
    ],
    color: 'cyan.800',
  };

  return (
    <Stack width="full">
      <Header
        title="Dashboard"
        icon={MdDashboard}
        buttons={[]}
      />
      <Stack
        direction="row"
        justify="space-between"
        width="full"
      >
        <Stack
          paddingX="4"
          spacing="8"
        >
          <Card>
            <Text>Hola</Text>
          </Card>
        </Stack>
        <Stack
          paddingX="4"
          spacing="8"
        >
          <OEECard
            title={oee.title}
            data={oee.data}
            color={oee.color}
          />
          <OEECard
            title={availability.title}
            data={availability.data}
            color={availability.color}
          />
          <OEECard
            title={performance.title}
            data={performance.data}
            color={performance.color}
          />
          <OEECard
            title={quality.title}
            data={quality.data}
            color={quality.color}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
