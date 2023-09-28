import Sidebar from '@/Components/SideBar';
import Navbar from '@/Components/NavBar';
import './styles.scss';
import DetailsTable from '@/Components/Details';
export default function List () {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
              <Navbar/>
              <DetailsTable />
            </div>
        </div>
    )
}