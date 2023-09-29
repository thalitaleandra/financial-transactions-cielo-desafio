import { useState, useEffect  } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import "./styles.scss"
import ITransactions from '@/Interfaces/ITransactions';

const COLORS = ['#FF5F00', '#00ADEF', '#1B365D', '#FD6012'];

interface PieChartComponentProps {
  formattedData: ITransactions[];
}
export default function PieChartComponent({formattedData}: PieChartComponentProps){
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    const data = formattedData.reduce((acc: { [key: string]: number }, transaction) => {
      const cardBrand = transaction.cardBrand;
      acc[cardBrand] = (acc[cardBrand] || 0) + 1;
      return acc;
    }, {});

    const cardData = Object.keys(data).map((cardBrand) => ({
      name: cardBrand,
      value: data[cardBrand],
    }));

    setChartData(cardData);
  }, [formattedData]);
    return (
        <PieChart width={400} height={400}>
           <text x="50%" y="5%" textAnchor="middle" dominantBaseline="middle"  className="piechartTitle" fontSize="1em">
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
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend  />
      </PieChart>
      );
}