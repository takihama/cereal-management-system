import axios from 'axios';
import { NewProduct } from '../types';

const baseUrl = 'http://localhost:3001/api/products';

const getAll = () => (
  axios
    .get(baseUrl)
    .then((response) => response.data)
);

const get = (id: number) => (
  axios
    .get(`${baseUrl}/${id}`)
    .then((response) => response.data)
);

const create = (product: NewProduct) => (
  axios
    .post(baseUrl, product)
    .then((response) => response.data)
);

const productsService = {
  create,
  get,
  getAll,
};

export default productsService;
