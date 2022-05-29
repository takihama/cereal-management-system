import React, { useState } from 'react';
import { Stack, useDisclosure } from '@chakra-ui/react';
import { FaBoxOpen } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import { IconType } from 'react-icons';
import Header from '../components/header/Header';
import CreateProductModal from '../components/modals/CreateProductModal';

interface HeaderButtons {
  name: string
  icon?: IconType
  onClick: React.MouseEventHandler<Element>
}
interface Product {
  name: string
  code: string
  image?: string
  description: string
}
interface ProductsState {
  searchProduct: string
}
export default function Products() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchProduct, setSearchProduct] = useState<ProductsState['searchProduct']>('');
  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(evt.target.value);
  };
  const handleCreateProduct = () => {
    console.log('Create products');
    onOpen();
  };
  const handleImportProducts = () => {
    console.log('Import products');
  };
  const createProduct = (product: Product) => {
    console.log(product);
  };
  const buttons: Array<HeaderButtons> = [{
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
    <Stack
      width="100%"
    >
      <Header
        title="Products"
        icon={FaBoxOpen}
        search={{
          name: 'searchProduct',
          value: searchProduct,
          placeholder: 'Filter by product name or SKU',
          onChange: onSearchChange,
        }}
        buttons={buttons}
      />
      <CreateProductModal onCreateProduct={createProduct} isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
}
