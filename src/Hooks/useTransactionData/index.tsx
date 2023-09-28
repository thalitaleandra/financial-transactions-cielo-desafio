import { useEffect, useState } from 'react';
import fetchTransactions from '@/Services/fetchTransactions';
import { format } from 'date-fns';

export default function useTransactionData() {
  const [formattedData, setFormattedData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTransactions();
        const formattedItems = response.items.map((item, index) => {
        const randomDate = new Date(Date.now() - Math.random() * 10 * 365 * 24 * 60 * 60 * 1000);
          return {
            ...item,
            date: format(randomDate, 'dd/MM/yyyy'), 
            paymentType: (index < 10 && item.paymentType === "Crédito à vista") ? "Débito" : item.paymentType,
            status: (index < 1 && item.status === "Aprovada") ? "Negada": item.status
          };
        });
        setFormattedData(formattedItems);
      } catch (error) {
        console.error('Erro ao carregar transações:', error);
      }
    };

    fetchData();
  }, []);

  return formattedData
}