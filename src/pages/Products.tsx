import React, { useState } from 'react';
import { Box, Stack, useDisclosure } from '@chakra-ui/react';
import { FaBoxOpen } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import Header from '../components/header/Header';
import CreateProductModal from '../components/modals/products/CreateProductModal';
import ImportModal from '../components/modals/ImportModal';
import { Product } from '../types';
import CustomTable from '../components/table/CustomTable';

interface ProductsState {
  searchProduct: string
  products: Array<Product>
}

const tableHeaders = [
  {
    title: 'Image',
    accessor: 'image',
  },
  {
    title: 'Code',
    accessor: 'code',
  },
  {
    title: 'Name',
    accessor: 'name',
  },
  {
    title: 'Description',
    accessor: 'description',
  },
];

export default function Products() {
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const { isOpen: isImportOpen, onOpen: onImportOpen, onClose: onImportClose } = useDisclosure();
  const [products, setProducts] = useState<ProductsState['products']>([]);
  const [searchProduct, setSearchProduct] = useState<ProductsState['searchProduct']>('');
  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(evt.target.value);
  };
  const handleCreateProduct = () => {
    onCreateOpen();
  };
  const handleImportProducts = () => {
    onImportOpen();
  };
  const createProduct = (product: Product) => {
    setProducts(products.concat(product));
  };
  const importProducts = () => {
  };
  const headerButtons = [{
    name: 'Create',
    icon: BsPlus,
    onClick: handleCreateProduct,
  },
  {
    name: 'Import',
    icon: BiImport,
    onClick: handleImportProducts,
  },
  ];
  return (
    <Stack width="100%">
      <Header
        title="Products"
        icon={FaBoxOpen}
        search={{
          name: 'searchProduct',
          value: searchProduct,
          placeholder: 'Filter by product name or SKU',
          onChange: onSearchChange,
        }}
        buttons={headerButtons}
      />
      <Box padding="4">
        <Box bg="white">
          <CustomTable
            headers={tableHeaders}
            datasource={products}
          />
        </Box>
      </Box>
      <CreateProductModal
        onCreateProduct={createProduct}
        isOpen={isCreateOpen}
        onClose={onCreateClose}
      />
      <ImportModal
        title="Import products"
        icon={FaBoxOpen}
        onImport={importProducts}
        isOpen={isImportOpen}
        onClose={onImportClose}
      />
    </Stack>
  );
}
