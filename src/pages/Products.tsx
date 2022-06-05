import React, { useState } from 'react';
import { Stack, useDisclosure } from '@chakra-ui/react';
import { FaBoxOpen } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import { IconType } from 'react-icons';
import Header from '../components/header/Header';
import CreateProductModal from '../components/modals/products/CreateProductModal';
import ImportModal from '../components/modals/ImportModal';
import CustomTableWFilter from '../components/table/CustomTableWFilter';

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
  products: Array<Product>
}
export default function Products() {
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const { isOpen: isImportOpen, onOpen: onImportOpen, onClose: onImportClose } = useDisclosure();
  const titles = ['Product name', 'Product code', 'Image', 'Description'];
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
  const headerButtons: Array<HeaderButtons> = [{
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
        buttons={headerButtons}
      />
      <CustomTableWFilter
        titles={titles}
        data={products}
        filter={null}
      />
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
