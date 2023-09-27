import "@/Components/SideBar/styles.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
export default function Sidebar (){
    return(
      <div className="sideBar">
       <div className="top">
        <span className="logo">admin</span>
        </div>
        <hr/>
       <div className="center">
         <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
            </li>
            <li>
                <span>Dashboard</span>
            </li>
            <li>
                <span>Dashboard</span>
            </li>
         </ul>
       </div>
       <div className="bottom">color options</div>
      </div>
    )
}