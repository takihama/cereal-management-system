import { NewProduct, NewProductionOrder, NewRaw, ProductRaw } from "../types";

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseString = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error('Incorrect or missing string');
  }

  return text;
};

type ProductFields = { name: unknown, code: unknown, description: unknown, raws: Array<ProductRaw> };

const toNewProduct = ({ name, code, description, raws }: ProductFields): NewProduct => {
  const newEntry: NewProduct = {
    name: parseString(name),
    code: parseString(code),
    description: parseString(description),
    raws: raws
  };

  return newEntry;
};

type ProductionOrderFields = { code: unknown, client: unknown, description: unknown };
const toNewProductionOrder = ({ code, client, description }: ProductionOrderFields): NewProductionOrder => {
  const newEntry: NewProductionOrder = {
    code: parseString(code),
    client: parseString(client),
    description: parseString(description),
  };

  return newEntry;
};

type RawFields = { code: unknown, type: unknown, description: unknown };
const toNewRaw = ({ code, type, description }: RawFields): NewRaw => {
  const newEntry: NewRaw = {
    code: parseString(code),
    type: parseString(type),
    description: parseString(description),
  };

  return newEntry;
};

export default {
  toNewProduct,
  toNewProductionOrder,
  toNewRaw
};