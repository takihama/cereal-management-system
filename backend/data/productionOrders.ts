import { ProductionOrder } from "../types";

const productionOrdersData: Array<ProductionOrder> = [
  {
    id: 1,
    code: "OPCF0001",
    client: "Arcor",
    description: "Cornflakes",
    programmedDate: "10/07/2022",
    status: "draft"
  },
  {
    id: 2,
    code: "OPCFWS0001",
    client: "Tres Arroyos",
    description: "Cornflakes without sugar",
    programmedDate: "10/07/2022",
    status: "draft"
  }
];

export default productionOrdersData;
