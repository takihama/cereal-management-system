import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import {
  Link, Stack, Text, useDisclosure,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { AiOutlineTool } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import Header from '../../components/header/Header';
import CreateProductionModal from '../../components/modals/production/CreateProductionModal';
import ImportModal from '../../components/modals/ImportModal';
import CustomTable from '../../components/table/CustomTable';

interface HeaderButtons {
  name: string
  icon?: IconType
  onClick: React.MouseEventHandler<Element>
}
interface ProductionOrder {
  id: string
  date: string
  manufacturer: string
  status: string
  quantity: number
  startedOn?: string
}
interface ProductionOrdersState {
  searchProductionOrder: string
  productionOrders: Array<ProductionOrder>
}
export default function ProductionOrders() {
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const { isOpen: isImportOpen, onOpen: onImportOpen, onClose: onImportClose } = useDisclosure();
  const headers = [{
    header: 'Order',
    accessor: 'id',
    render: (data: any): JSX.Element => (
      <Link as={RouteLink} to={data}><Text>{data}</Text></Link>
    ),
  },
  {
    header: 'Date',
    accessor: 'date',
    render: (data: any): JSX.Element => (
      <Text>{data}</Text>
    ),
  },
  {
    header: 'Manufacturer',
    accessor: 'manufacturer',
    render: (data: any) => (
      <Text>{data}</Text>
    ),
  },
  {
    header: 'Status',
    accessor: 'status',
    render: (data: any) => (
      <Text>{data}</Text>
    ),
  },
  {
    header: 'Quantity',
    accessor: 'quantity',
    render: (data: any) => (
      <Text>{data}</Text>
    ),
  },
  {
    header: 'Started on',
    accessor: 'startDate',
    render: (data: any) => (
      <Text>{data}</Text>
    ),
  },
  ];

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
        headers={headers}
        datasource={productionOrders}
      />
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
