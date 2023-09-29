import { useState, useEffect } from 'react';
import ChartComponent from "@/Components/Chart";
import PieChartComponent from "@/Components/PieChart";
import Navbar from "@/Components/NavBar";
import Sidebar from "@/Components/SideBar";
import CustomTable from "@/Components/Table";
import Widget from "@/Components/Widget";
import fetchTransactions from '@/Services/fetchTransactions';
import Loader from '@/Components/Load/index.tsx';
import "./styles.scss";

export default function Home () {
    const [loading, setLoading] = useState(true);
    const [totalQuantity, settotalQuantity] = useState(0);
    const [totalAmount, settotalAmount] = useState(0);
    const [totalNetAmount, settotalNetAmount] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchTransactions();
                settotalQuantity(response.summary.totalQuantity);
                settotalAmount(response.summary.totalAmount);
                settotalNetAmount(response.summary.totalNetAmount);
            } catch (error) {
                console.error('error');
             } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []);
    if (loading) {
        return <Loader />; 
    }
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
             <Navbar disabled={true}/>
             <div className="widgets">
               <Widget description="Total de Transações" value={totalQuantity} porcentagem="20%" />
               <Widget description="Total de Valor Bruto" value={totalAmount} porcentagem="35%" />
               <Widget description="Total de Valor Líquido" value={totalNetAmount} porcentagem="25%" />
             </div>
             <div className="charts">
                <PieChartComponent />
                <ChartComponent />
             </div>
             <div className="listContainer">
                <div className="litTitle">Últimas Transações</div>
                <CustomTable />
             </div>
            </div>
        </div>
    )
}