import { useState, useEffect  } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import useTransactionData from '@/Hooks/useTransactionData';
import "./styles.scss"

const COLORS = ['#FF5F00', '#00ADEF', '#1B365D', '#FD6012'];
export default function PieChartComponent(){
  const transactions = useTransactionData();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const data = transactions.reduce((acc, transaction) => {
      const cardBrand = transaction.cardBrand;
      acc[cardBrand] = (acc[cardBrand] || 0) + 1;
      return acc;
    }, {});

    const formattedData = Object.keys(data).map((cardBrand) => ({
      name: cardBrand,
      value: data[cardBrand],
    }));

    setChartData(formattedData);
  }, [transactions]);
    return (
        <PieChart width={400} height={400}>
           <text x="50%" y="5%" textAnchor="middle" dominantBaseline="middle" fontWeight="bold" fontSize="1em">
           Distribuição por Bandeira de Cartão
           </text>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend  />
      </PieChart>
      );
}