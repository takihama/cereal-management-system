import axios from 'axios';
import { NewRaw } from '../types';

const baseUrl = 'http://localhost:3001/api/raws';

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

const create = (raw: NewRaw) => (
  axios
    .post(baseUrl, raw)
    .then((response) => response.data)
);

const rawsService = {
  create,
  get,
  getAll,
};

export default rawsService;
