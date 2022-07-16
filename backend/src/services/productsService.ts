import productsData from '../../data/products';
import { NewProduct, Product } from '../../types';

const getEntries = (): Array<Product> => {
  return productsData;
};

const addProduct = (entry: NewProduct) => {
  const newProduct = {
    id: Math.max(...productsData.map(d => d.id)) + 1,
    ...entry
  };

  productsData.push(newProduct);
  return newProduct;
};

const findById = (id: number): Product | undefined => {
  const entry = productsData.find(p => p.id === id);
  return entry;
};

export default {
  getEntries,
  addProduct,
  findById
};
