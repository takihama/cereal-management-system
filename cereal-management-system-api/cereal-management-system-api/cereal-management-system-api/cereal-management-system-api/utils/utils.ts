import { NewProduct, NewProductionOrder } from "../types";

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

type ProductionOrderFields = { code: unknown, manufacturer: unknown, description: unknown };
const toNewProductionOrder = ({ code, manufacturer, description }: ProductionOrderFields): NewProductionOrder => {
  const newEntry: NewProductionOrder = {
    code: parseString(code),
    manufacturer: parseString(manufacturer),
    description: parseString(description)
  };

  return newEntry;
};

export default {
  toNewProduct,
  toNewProductionOrder
};