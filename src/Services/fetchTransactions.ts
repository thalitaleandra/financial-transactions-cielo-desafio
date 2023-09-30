import axiosInstance from '../Libs/axios';
import  ApiResponse  from '@/Interfaces/ApiResponse';

export default async function fetchTransactions(): Promise<ApiResponse> {
    const response = await axiosInstance.get('/transactions');
    return {
        summary: response.data.summary,
        pagination: response.data.pagination,
        items: response.data.items,
    };
}