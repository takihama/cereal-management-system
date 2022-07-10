import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { AiOutlineTool } from 'react-icons/ai';
import Header from '../../components/header/Header';

export default function ProductionOrder() {
  const params = useParams();
  return (
    <Stack width="full">
      <Header
        title={`Production Order: ${params.productionOrderId}`}
        icon={AiOutlineTool}
        search={null}
        buttons={[]}
      />
    </Stack>
  );
}
