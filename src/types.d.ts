export interface ProductionOrder {
  id: string
  date: string
  manufacturer: string
  status: string
  quantity: number
  startedOn?: string
}

export interface Product {
  id: string
  name: string
  code: string
  image?: string
  description: string
}
