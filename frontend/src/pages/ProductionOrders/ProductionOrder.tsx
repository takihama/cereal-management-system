import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { AiOutlineTool } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';
import Header from '../../components/header/Header';

export default function ProductionOrder() {
  const params = useParams();
  const handleStartProductionOrder = () => {
    console.log('start production order');
  };
  const headerButtons = [{
    name: 'Start',
    icon: BsPlayFill,
    onClick: handleStartProductionOrder,
  }];
  return (
    <Stack width="full">
      <Header
        title={`Production Order: ${params.productionOrderId}`}
        icon={AiOutlineTool}
        buttons={headerButtons}
      />
      <Box padding="4">
        <Box bg="white" padding="4">
          {params.productionOrderId}
        </Box>
      </Box>
    </Stack>
  );
}
