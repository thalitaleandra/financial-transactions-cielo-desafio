import Sidebar from '@/Components/SideBar';
import Navbar from '@/Components/NavBar';
import DetailsTable from '@/Components/Details';
import useTransactionData from '@/Hooks/useTransactionData';
import './styles.scss';

export default function List () {
    const formattedData = useTransactionData();
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
              <Navbar disabled={false}/>
              <DetailsTable formattedData={formattedData} />
            </div>
        </div>
    )
}