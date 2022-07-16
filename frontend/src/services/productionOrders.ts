import axios from 'axios';
import { NewProductionOrder } from '../types';

const baseUrl = '/api/productionOrders';

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

const create = (productionOrder: NewProductionOrder) => (
  axios
    .post(baseUrl, productionOrder)
    .then((response) => response.data)
);

const productionOrdersService = {
  create,
  get,
  getAll,
};

export default productionOrdersService;
