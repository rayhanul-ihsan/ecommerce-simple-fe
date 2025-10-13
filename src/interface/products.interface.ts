export interface IProduct {
  id?: number;   // id optional saat create
  title: string;
  description: string
  price: number;
  status?: boolean
  unit?: string
}

export interface IParamsGetProduct {
  skip: number
  limit: number
  sortBy?: string
  order?: string
}