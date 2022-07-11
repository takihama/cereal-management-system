export interface ProductionOrder {
  id: number
  code: string
  manufacturer: string
  description?: string
  date: string
  status: string
  startedOn?: string
}

export interface Product {
  id: number
  name: string
  code: string
  image?: string
  description: string
}

export interface Raw {
  id: number
  name: string
  code: string
  description: string
}

export type NewProduct = Omit<Product, 'id'>;
export type NewProductionOrder = Pick<ProductionOrder, 'code' | 'manufacturer' | 'description'>;
export type NewRaw = Omit<Raw, 'id'>;
