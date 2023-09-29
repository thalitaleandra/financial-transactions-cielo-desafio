import Sidebar from '@/Components/SideBar';
import Navbar from '@/Components/NavBar';
import DetailsTable from '@/Components/Details';
import useTransactionData from '@/Hooks/useTransactionData';
import { useState,  useEffect} from "react";
import ITransactions from '@/Interfaces/ITransactions';
import './styles.scss';

export default function List () {
    const formattedData = useTransactionData();
    const [filteredData, setFilteredData] = useState<ITransactions[]>([]);

    useEffect(() => {
        setFilteredData(formattedData);
    }, [formattedData]);
    function handleFilterData(searchTerm: string) {
      const filtered = formattedData.filter(item => item.id.includes(searchTerm));
      setFilteredData(filtered);
    }
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
              <Navbar disabled={false}  handleFilterData={handleFilterData} />
              <DetailsTable formattedData={filteredData} />
            </div>
        </div>
    )
}