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
  programmedDate?: Date
  programmedQuantity?: number
  notes?: string
  status: 'draft' | 'started' | 'paused' | 'finished' | 'cancelled'
  products?: Array<Product>
  startedOn?: Date
  finishedOn?: Date
  acceptedProducts?: number
  rejectedProducts?: number
}

export type NewRaw = Omit<Raw, 'id'>;
export type NewProduct = Omit<Product, 'id'>;
export type NewProductionOrder = Omit<ProductionOrder, 'id'>;
