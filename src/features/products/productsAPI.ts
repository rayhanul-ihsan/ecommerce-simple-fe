import axios, { AxiosResponse } from "axios";
import { IProduct } from "../../interface/products.interface";

export const API_BASE_URL = "http://localhost:8000/api/v1";

// Helper untuk ambil access token dari localStorage
export const getAuthHeader = () => {
  const me = localStorage.getItem("me");
  const access_token = JSON.parse(me || "{}")?.access_token;
  return {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
};

// --- CREATE ---
export const createProduct = async (product: IProduct): Promise<IProduct> => {
  const response: AxiosResponse<IProduct> = await axios.post(
    `${API_BASE_URL}/products/add`,
    product,
    getAuthHeader()
  );
  return response.data;
};

// --- READ ALL ---
export const getProducts = async ({ params }: any): Promise<IProduct[]> => {
  const response: AxiosResponse<IProduct[]> = await axios.post(
    `${API_BASE_URL}/products/getAll`,
    params,
    getAuthHeader()
  );
  return response.data;
};

// --- READ BY ID ---
export const getProductById = async (id: string): Promise<IProduct> => {
  const response: AxiosResponse<IProduct> = await axios.get(
    `${API_BASE_URL}/products/${id}`,
    getAuthHeader()
  );
  return response.data;
};

// --- UPDATE ---
export const updateProduct = async (
  id: number,
  product: IProduct
): Promise<IProduct> => {
  const response: AxiosResponse<IProduct> = await axios.put(
    `${API_BASE_URL}/products/${id}`,
    product,
    getAuthHeader()
  );
  return response.data;
};

// --- DELETE ---
export const deleteProduct = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/products/${id}`, getAuthHeader());
};
