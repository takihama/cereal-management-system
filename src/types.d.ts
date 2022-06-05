export interface ProductionOrder {
  id: string
  date: string
  manufacturer: string
  status: string
  quantity: number
  startedOn?: string
}

export interface Product {
  name: string
  code: string
  image?: string
  description: string
}
