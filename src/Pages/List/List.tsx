import Sidebar from '@/Components/SideBar';
import Navbar from '@/Components/NavBar';
import DetailsTable from '@/Components/Details';
import './styles.scss';

export default function List () {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
              <Navbar disabled={false}/>
              <DetailsTable />
            </div>
        </div>
    )
}