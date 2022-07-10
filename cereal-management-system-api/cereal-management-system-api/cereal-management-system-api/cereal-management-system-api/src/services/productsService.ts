import productsData from '../../data/products.json';
import { NewProduct, Product } from '../../types';

const products: Array<Product> = productsData;

const getEntries = (): Array<Product> => {
  return products;
};

const addProduct = (entry: NewProduct) => {
  const newProduct = {
    id: Math.max(...products.map(d => d.id)) + 1,
    ...entry
  };

  products.push(newProduct);
  return newProduct;
};

const findById = (id: number): Product | undefined => {
  const entry = products.find(p => p.id === id);
  return entry;
};

export default {
  getEntries,
  addProduct,
  findById
};
