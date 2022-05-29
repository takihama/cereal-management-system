import React, { useState } from 'react';
import { Stack, useDisclosure } from '@chakra-ui/react';
import { FaBoxOpen } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import { IconType } from 'react-icons';
import Header from '../components/header/Header';
import CreateProductModal from '../components/modals/CreateProductModal';
import ImportProductsModal from '../components/modals/ImportProductsModal';
import ProductsTable from '../components/table/ProductsTable';

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
  const [products, setProducts] = useState<ProductsState['products']>([]);
  const [searchProduct, setSearchProduct] = useState<ProductsState['searchProduct']>('');
  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(evt.target.value);
  };
  const handleCreateProduct = () => {
    console.log('Create products');
    onCreateOpen();
  };
  const handleImportProducts = () => {
    console.log('Import products');
    onImportOpen();
  };
  const createProduct = (product: Product) => {
    setProducts(products.concat(product));
    console.log(product);
  };
  const importProducts = () => {
    console.log('importProducts');
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
      <CreateProductModal
        onCreateProduct={createProduct}
        isOpen={isCreateOpen}
        onClose={onCreateClose}
      />
      <ImportProductsModal
        onImportProducts={importProducts}
        isOpen={isImportOpen}
        onClose={onImportClose}
      />
      <ProductsTable products={products} />
    </Stack>
  );
}
