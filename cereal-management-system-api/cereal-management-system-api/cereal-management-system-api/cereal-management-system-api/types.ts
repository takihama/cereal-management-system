export interface Raw {
  id: number
  code: string
  type: string
  description: string
}

export interface Product {
  id: number
  code: string
  name: string
  description?: string
  image?: string
  raws?: Array<Raw>
}

export interface ProductionOrder {
  id: number
  code: string
  client: string
  description?: string
  programmedDate?: string
  programmedQuantity?: number
  notes?: string
  status: string
  products?: Array<Product>
  startedOn?: string
  finishedOn?: string
  acceptedProducts?: number
  rejectedProducts?: number
}

export type NewProduct = Omit<Product, 'id'>;
export type NewProductionOrder = Omit<ProductionOrder, 'id' | 'status'>;
export type NewRaw = Omit<Raw, 'id'>;
