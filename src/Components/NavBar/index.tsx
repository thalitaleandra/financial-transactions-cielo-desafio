import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ListIcon from '@mui/icons-material/List';
import { useContext, useState,  FormEvent } from "react";
import { DarkModeContext } from "@/Context/darkModeContext";
import "./styles.scss";


interface NavbarProps {
  disabled: boolean;
  handleFilterData?: (searchTerm: string) => void; 
}

export default function Navbar ({disabled,  handleFilterData}: NavbarProps ) {
  const [busca, setBusca] = useState('');
  const { dispatch } = useContext(DarkModeContext);

  function filterData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleFilterData(busca); 
  }
    return(
      <div className="navBar">
        <div className="wrapper">
         <form className="search" onSubmit={filterData}>
          <input 
            type="search"  
            disabled={disabled}
            placeholder="Insira Id da Transação..." 
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
            />
          <SearchIcon />
         </form>
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