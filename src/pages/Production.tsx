import { Stack, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineTool } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import Header from '../components/header/Header';
import CustomTable from '../components/table/CustomTable';
import CreateProductionModal from '../components/modals/production/CreateProductionModal';
import ImportProductionsModal from '../components/modals/production/ImportProductionsModal';

interface HeaderButtons {
  name: string
  icon?: IconType
  onClick: React.MouseEventHandler<Element>
}
interface ProductionOrder {
  order: string
  date: string
  manufacturer: string
  status: string
  quantity: number
  startedOn?: string
}
interface ProductionState {
  searchProductionOrder: string
  productionOrders: Array<ProductionOrder>
}
export default function Production() {
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const { isOpen: isImportOpen, onOpen: onImportOpen, onClose: onImportClose } = useDisclosure();
  const titles = ['Order', 'Date', 'Manufacturer', 'Status', 'Quantity', 'Started on'];
  const [productionOrders, setProductionOrders] = useState<ProductionState['productionOrders']>([]);
  const [searchProductionOrder, setSearchProductionOrder] = useState<ProductionState['searchProductionOrder']>('');
  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProductionOrder(evt.target.value);
  };
  const handleCreateProductionOrder = () => {
    onCreateOpen();
  };
  const handleImportProductionOrders = () => {
    onImportOpen();
  };
  const createProductionOrder = (productionOrder: ProductionOrder) => {
    setProductionOrders(productionOrders.concat(productionOrder));
  };
  const importProductionOrders = () => {
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
      <CustomTable
        titles={titles}
        data={productionOrders}
        filter={{ placeholder: 'Status is: Draft, InProduction or Completed', searchKey: 'status' }}
      />
      <CreateProductionModal
        onCreateProduction={createProductionOrder}
        isOpen={isCreateOpen}
        onClose={onCreateClose}
      />
      <ImportProductionsModal
        onImportProducts={importProductionOrders}
        isOpen={isImportOpen}
        onClose={onImportClose}
      />
    </Stack>
  );
}
