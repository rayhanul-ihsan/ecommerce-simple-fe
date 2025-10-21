export interface IProduct {
  id?: number;   // id optional saat create
  image?: string;
  name: string;
  category: string
  price: number;
  stok: number;
  stokMenipis?: number;
  description?: string;
  status?: boolean
  satuan?: string
}

export interface IParamsGetProduct {
  search?: string;
  search_by?: string[];
  operator?: string;
  orderBy?: string;
  order?: string;
  page?: number;
  size?: number
}