export interface Raw {
  id: number
  code: string
  type: string
  description: string
}

export interface ProductRaw {
  id: number | string
  raw: Raw
  quantity: number
  unit: 'g' | 'kg' | 'un'
}

export interface Product {
  id: number
  code: string
  name: string
  description?: string
  image?: string
  raws: Array<ProductRaw>
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
