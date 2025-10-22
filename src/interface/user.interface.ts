export interface IUser {
    _id?: number;
    username: string;
    image?: string;
    email: string;
    phone: number;
    password: string;
    role: string;
    status?: boolean;
    created_at?: string;
    new_password?: string
}
export interface IParamsGetUser {
  search?: string;
  search_by?: string[];
  operator?: string;
  orderBy?: string;
  order?: string;
  page?: number;
  size?: number
}