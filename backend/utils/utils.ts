import { NewProduct, NewProductionOrder, NewRaw } from "../types";

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseString = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error('Incorrect or missing string');
  }

  return text;
};

type ProductFields = { name: unknown, code: unknown, description: unknown };

const toNewProduct = ({ name, code, description }: ProductFields): NewProduct => {
  const newEntry: NewProduct = {
    name: parseString(name),
    code: parseString(code),
    description: parseString(description)
  };

  return newEntry;
};

type ProductionOrderFields = { code: unknown, client: unknown, description: unknown };
const toNewProductionOrder = ({ code, client, description }: ProductionOrderFields): NewProductionOrder => {
  const newEntry: NewProductionOrder = {
    code: parseString(code),
    client: parseString(client),
    description: parseString(description)
  };

  return newEntry;
};

type RawFields = { code: unknown, description: unknown, type: unknown };
const toNewRaw = ({ code, description, type }: RawFields): NewRaw => {
  const newEntry: NewRaw = {
    code: parseString(code),
    description: parseString(description),
    type: parseString(type)
  };

  return newEntry;
};

export default {
  toNewProduct,
  toNewProductionOrder,
  toNewRaw
};