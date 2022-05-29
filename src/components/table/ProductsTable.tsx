import {
  Table, TableContainer, Tbody, Td, Th, Thead, Tr,
} from '@chakra-ui/react';
import React from 'react';

interface Product {
  name: string
  code: string
  image?: string
  description: string
}

interface ProductsTableProps {
  products: Array<Product>
}

export default function ProductsTable({ products }: ProductsTableProps) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Product name</Th>
            <Th>Product code</Th>
            <Th>Image</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.name}>
              <Td>{product.name}</Td>
              <Td>{product.code}</Td>
              <Td>{product.image}</Td>
              <Td>{product.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
