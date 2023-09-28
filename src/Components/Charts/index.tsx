import {
    ResponsiveContainer,
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
  import { useState, useEffect } from 'react';
  import useTransactionData from '@/Hooks/useTransactionData';
  import "./styles.scss"
export default function Charts (){
  const formattedData = useTransactionData();
  const [data, setData] = useState([]);
  useEffect(() => {
    const sortedData = [...formattedData].sort((transactionA, transactionB) => {
      const yearA = Number(transactionA.date.slice(-2));
      const yearB = Number(transactionB.date.slice(-2));
      return yearA - yearB;
    });
    const filteredData =  sortedData.filter(item => item.grossAmount <= 100 && item.netAmount <= 100);
    setData(filteredData);
  }, [formattedData]);
    return(
        <div className="chart">
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="date" name="Ano"  tickFormatter={(value) => {
               const lastFourDigits = value.slice(-4);
               return lastFourDigits;
               }} scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone"   dataKey="grossAmount" fill="#87CEEB" stroke="#4682B4"  name="Total Bruto" />
            <Bar dataKey="netAmount"  barSize={20} fill="#4682B4" stroke="#708090" name="Total Líquido" />
          </ComposedChart>
        </ResponsiveContainer>
    </div>
    )
}