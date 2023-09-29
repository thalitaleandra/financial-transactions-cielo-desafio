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
  import ITransactions from '@/Interfaces/ITransactions';
  import "./styles.scss";

  interface ChartsProps {
    formattedData: ITransactions[];
  }
export default function Charts ({formattedData}: ChartsProps){
  const [data, setData] = useState<ITransactions[]>([]);
  useEffect(() => {
    const sortedData = [...formattedData].sort((transactionA, transactionB) => {
      const yearA = Number(transactionA.date.slice(-2));
      const yearB = Number(transactionB.date.slice(-2));
      return yearA - yearB;
    });
    const filteredData =  sortedData.filter(item => item.grossAmount <= 100 && item.netAmount <= 100);
    const uniqueData = filteredData.reduce((acc, item) => {
      const year = Number(item.date.slice(-2));
      if (!acc.uniqueYears.has(year)) {
        acc.uniqueYears.add(year);
        acc.result.push(item);
      }
      return acc;
    }, { uniqueYears: new Set<number>(), result: [] as ITransactions[] }).result;

  setData(uniqueData)
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
            aria-label="Gráfico de Transações"
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="date" name="Ano"  tickFormatter={(value) => {
               const lastFourDigits = value.slice(-4);
               return lastFourDigits;
               }} 
               scale="band"
               aria-label="Eixo X - Ano"
               />
            <YAxis 
             aria-label="Eixo Y - Valores"
             label={{ value: 'Valores', angle: -90, position: 'insideLeft' }} 
             />
            <Tooltip />
            <Legend />
            <Area type="monotone" aria-label="Área de Gráfico - Total Bruto"   dataKey="grossAmount" fill="#87CEEB" stroke="#4682B4"  name="Total Bruto" />
            <Bar dataKey="netAmount" aria-label="Barra de Gráfico - Total Líquido" barSize={20} fill="#4682B4" stroke="#708090" name="Total Líquido" />
          </ComposedChart>
        </ResponsiveContainer>
    </div>
    )
}