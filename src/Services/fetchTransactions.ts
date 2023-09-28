import axiosInstance from '@/Libs/axios';
import  ApiResponse  from '@/Interfaces/ApiResponse';

export default async function fetchTransactions(): Promise<ApiResponse> {
    const response = await axiosInstance.get('/transactions');
    return {
        summary: response.data.summary,
        pagination: response.data.pagination,
        totalElements: response.data.pagination.totalElements,
        items: response.data.items,
    };
}