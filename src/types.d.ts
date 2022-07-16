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

export type NewProduct = Omit<Product, 'id'>;
export type NewProductionOrder = Omit<ProductionOrder, 'id'>;
export type NewRaw = Omit<Raw, 'id'>;
