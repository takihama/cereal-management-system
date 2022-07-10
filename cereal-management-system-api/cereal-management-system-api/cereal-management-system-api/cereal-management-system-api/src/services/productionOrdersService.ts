import productionOrdersData from '../../data/productionOrdersData.json';
import { NewProductionOrder, ProductionOrder } from '../../types';

const productionOrders: Array<ProductionOrder> = productionOrdersData;

const getEntries = (): Array<ProductionOrder> => {
  return productionOrders;
};

const addProductionOrder = (entry: NewProductionOrder) => {
  const newProductionOrder = {
    id: Math.max(...productionOrders.map(d => d.id)) + 1,
    date: Date.now().toLocaleString(),
    status: 'DRAFT',
    ...entry
  };

  productionOrders.push(newProductionOrder);
  return newProductionOrder;
};


const findById = (id: number): ProductionOrder | undefined => {
  const entry = productionOrders.find(po => po.id === id);
  return entry;
};

export default {
  getEntries,
  addProductionOrder,
  findById,
};
