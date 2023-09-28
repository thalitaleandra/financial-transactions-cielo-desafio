import React, { useState, useEffect } from 'react';
import Charts from "@/Components/Charts";
import Feature from "@/Components/Featured";
import Navbar from "@/Components/NavBar";
import Sidebar from "@/Components/SideBar";
import  CustomTable from "@/Components/Table";
import Widget from "@/Components/Widget";
import fetchTransactions from '@/Services/fetchTransactions';
import "./styles.scss";

export default function Home () {
    const [totalQuantity, settotalQuantity] = useState(null);
    const [totalAmount, settotalAmount] = useState(null);
    const [totalNetAmount, settotalNetAmount] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchTransactions();
                settotalQuantity(response.summary.totalQuantity);
                settotalAmount(response.summary.totalAmount);
                settotalNetAmount(response.summary.totalNetAmount);
            } catch (error) {
                console.error('error');
            }
        };

        fetchData();
    }, []);
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
             <Navbar/>
             <div className="widgets">
               <Widget description="Total de Transações" value={totalQuantity} porcentagem="20%" />
               <Widget description="Total de Valor Bruto" value={totalAmount} porcentagem="35%" />
               <Widget description="Total de Valor Líquido" value={totalNetAmount} porcentagem="25%" />
             </div>
             <div className="charts">
                <Feature/>
                <Charts />
             </div>
             <div className="listContainer">
                <div className="litTitle">Últimas Transações</div>
                <CustomTable />
             </div>
            </div>
        </div>
    )
}