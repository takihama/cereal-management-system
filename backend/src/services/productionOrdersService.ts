import productionOrdersData from '../../data/productionOrders';
import { NewProductionOrder, ProductionOrder } from '../../types';

const getEntries = (): Array<ProductionOrder> => {
  return productionOrdersData;
};

const addProductionOrder = (entry: NewProductionOrder) => {
  const newProductionOrder = {
    id: Math.max(...productionOrdersData.map(d => d.id)) + 1,
    date: Date.now().toLocaleString(),
    status: 'draft',
    ...entry
  };

  productionOrdersData.push(newProductionOrder);
  return newProductionOrder;
};


const findById = (id: number): ProductionOrder | undefined => {
  const entry = productionOrdersData.find(po => po.id === id);
  return entry;
};

export default {
  getEntries,
  addProductionOrder,
  findById,
};
