import { Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineTool } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import Header from '../components/header/Header';

interface HeaderButtons {
  name: string
  icon?: IconType
  onClick: React.MouseEventHandler<Element>
}
interface ProductionState {
  searchProductionOrder: string
}
export default function Production() {
  const [searchProductionOrder, setSearchProductionOrder] = useState<ProductionState['searchProductionOrder']>('');
  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProductionOrder(evt.target.value);
  };
  const handleCreateProductionOrder = () => {
    console.log('handleCreateProductionOrder');
  };
  const handleImportProductionOrders = () => {
    console.log('handleImportProductionOrders');
  };
  const headerButtons: Array<HeaderButtons> = [{
    name: 'Create',
    icon: BsPlus,
    onClick: handleCreateProductionOrder,
  },
  {
    name: 'Import',
    icon: BiImport,
    onClick: handleImportProductionOrders,
  },
  ];
  return (
    <Stack width="full">
      <Header
        title="Production"
        icon={AiOutlineTool}
        search={{
          name: 'searchProduct',
          value: searchProductionOrder,
          placeholder: 'Filter by order number, supllier name / reference number',
          onChange: onSearchChange,
        }}
        buttons={headerButtons}
      />
    </Stack>
  );
}
