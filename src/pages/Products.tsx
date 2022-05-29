import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import { FaBoxOpen } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import { IconType } from 'react-icons';
import Header from '../components/header/Header';

interface HeaderButtons {
  name: string
  icon?: IconType
  onClick: React.MouseEventHandler<Element>
}

interface ProductsState {
  searchProduct: string
}
export default function Products() {
  const [searchProduct, setSearchProduct] = useState<ProductsState['searchProduct']>('');
  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(evt.target.value);
  };
  const onCreateProduct = () => {
    console.log('Create product');
  };
  const onImportProducts = () => {
    console.log('Import products');
  };
  const buttons: Array<HeaderButtons> = [{
    name: 'Create',
    icon: BsPlus,
    onClick: onCreateProduct,
  },
  {
    name: 'Import',
    icon: BiImport,
    onClick: onImportProducts,
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
    </Stack>
  );
}
