import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {Link} from "react-router-dom";
import "./styles.scss";
import { useContext } from 'react';
import { DarkModeContext } from '@/Context/darkModeContext';
import CieloLogo from "@/Assets/img/logo.png"
export default function Sidebar (){
  const {dispatch} = useContext(DarkModeContext)
    return(
      <div className="sideBar">
       <div className="top">
        
        <Link to="/" style={{textDecoration: "none"}}> 
        <div className="logoContainer">
            <img src={CieloLogo} alt="Cielo Logo" className="logoImage" />
            <span className="logo">Projeto Cielo</span>
          </div>
        </Link>
        </div>
        <hr/>
       <div className="center">
         <ul>
            <p className="title">HOME</p>
            <Link to="/" style={{textDecoration: "none"}}>
            <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
            </li>
           </Link>
            <p className="title">Transactions</p>
            <Link to="/Transactions" style={{textDecoration: "none"}}>
            <li>
               <AccountBalanceIcon className="icon" />
                <span>Transações</span>
            </li>
            </Link>
         </ul>
       </div>
       <div className="bottom">
        <div className="colorOptions" onClick={() => dispatch({ type: "LIGTH"}) }></div>
        <div className="colorOptions" onClick={() => dispatch({ type: "DARK"})}></div>
       </div>
      </div>
    )
}