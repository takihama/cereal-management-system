import React from 'react';
import { Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

export default function ProductionOrder() {
  const params = useParams();
  return (
    <Text>
      {params.productionOrderId}
    </Text>
  );
}
