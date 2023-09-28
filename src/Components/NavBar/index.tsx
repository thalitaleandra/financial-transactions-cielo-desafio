import "./styles.scss"
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import ListIcon from '@mui/icons-material/List';
export default function Navbar (){
    return(
      <div className="navBar">
        <div className="wrapper">
         <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
         </div>
         <div className="items">
         <div className="item">
            <LanguageIcon className="icon"/>
           English
          </div>
          <div className="item">
            <DarkModeIcon className="icon"/>
          </div>
          <div className="item">
            <ListIcon className="icon"/>
          </div>
         </div>
        </div>
      </div>
    )
}