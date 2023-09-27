import axiosInstance from '@/Libs/axios';
import { ApiResponse } from '@/Interfaces/ApiResponse';

export default async function fetchTransactions(): Promise<ApiResponse> {
    const response = await axiosInstance.get('/transactions');
    return response.data;
}