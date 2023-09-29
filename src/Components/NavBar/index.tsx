import "./styles.scss"
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ListIcon from '@mui/icons-material/List';
import { useContext } from "react";
import { DarkModeContext } from "@/Context/darkModeContext";

interface NavbarProps {
  disabled: boolean;
}
export default function Navbar ({disabled}: NavbarProps) {
  const { dispatch } = useContext(DarkModeContext);
    return(
      <div className="navBar">
        <div className="wrapper">
         <div className="search">
          <input type="text"  disabled={disabled}  placeholder="Search..." />
          <SearchIcon />
         </div>
         <div className="items">
          <div className="item">
            <DarkModeIcon onClick={() => dispatch({ type: 'TOGGLE'}) } className="icon"/>
          </div>
          <div className="itemL">
            <ListIcon className="icon"/>
          </div>
         </div>
        </div>
      </div>
    )
}