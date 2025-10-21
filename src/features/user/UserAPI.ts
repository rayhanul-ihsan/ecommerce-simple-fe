import axios, { AxiosResponse } from "axios";
import { IUser } from "../../interface/user.interface";

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
export const createUser = async (params: IUser): Promise<IUser> => {
  const response: AxiosResponse<IUser> = await axios.post(
    `${API_BASE_URL}/users/add`,
    params,
  );
  return response.data;
};

// --- READ ALL ---
export const getUsers = async ({ params }: any): Promise<IUser[]> => {
  const response: AxiosResponse<IUser[]> = await axios.post(
    `${API_BASE_URL}/users/getAll`,
    params,
    getAuthHeader()
  );
  return response.data;
};

// --- READ BY ID ---
export const getUserById = async (id: string): Promise<IUser> => {
  const response: AxiosResponse<IUser> = await axios.get(
    `${API_BASE_URL}/users/${id}`,
    getAuthHeader()
  );
  return response.data;
};

// --- UPDATE ---
export const updateUser = async (
  id: number,
  params: IUser
): Promise<IUser> => {
  const response: AxiosResponse<IUser> = await axios.put(
    `${API_BASE_URL}/users/update/${id}`,
    params,
    getAuthHeader()
  );
  return response.data;
};

// --- DELETE ---
export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/users/delete/${id}`, getAuthHeader());
};
