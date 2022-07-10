import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import {
  Badge, Box, Link, Stack, Text, useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineTool } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import Header from '../../components/header/Header';
import CreateProductionModal from '../../components/modals/production/CreateProductionModal';
import ImportModal from '../../components/modals/ImportModal';
import CustomTable from '../../components/table/CustomTable';
import { ProductionOrder } from '../../types';

interface ProductionOrdersState {
  searchProductionOrder: string
  productionOrders: Array<ProductionOrder>
}

const tableHeaders = [
  {
    title: 'Order',
    accessor: 'code',
    render: (data: any): JSX.Element => (
      <Link as={RouteLink} to={data}><Text>{data}</Text></Link>
    ),
  },
  {
    title: 'Date',
    accessor: 'date',
  },
  {
    title: 'Manufacturer',
    accessor: 'manufacturer',
  },
  {
    title: 'Status',
    accessor: 'status',
    render: (data: any) => (
      <Badge padding="1">{data}</Badge>
    ),
  },
  {
    title: 'Quantity',
    accessor: 'quantity',
  },
  {
    title: 'Started on',
    accessor: 'startDate',
  },
];

export default function ProductionOrders() {
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const { isOpen: isImportOpen, onOpen: onImportOpen, onClose: onImportClose } = useDisclosure();

  const [productionOrders, setProductionOrders] = useState<ProductionOrdersState['productionOrders']>([]);
  const [searchProductionOrder, setSearchProductionOrder] = useState<ProductionOrdersState['searchProductionOrder']>('');
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
  const headerButtons = [{
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
      <Box padding="4">
        <Box bg="white">
          <CustomTable
            headers={tableHeaders}
            datasource={productionOrders}
          />
        </Box>
      </Box>
      <CreateProductionModal
        onCreateProduction={createProductionOrder}
        isOpen={isCreateOpen}
        onClose={onCreateClose}
      />
      <ImportModal
        title="Import production orders"
        icon={AiOutlineTool}
        onImport={importProductionOrders}
        isOpen={isImportOpen}
        onClose={onImportClose}
      />
    </Stack>
  );
}
