import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {Link} from "react-router-dom";
import "./styles.scss";

interface WidgetPropos {
    description: string;
    value: number;
    porcentagem: string;
}
export default function Widget({description, value, porcentagem}: WidgetPropos){
    return(
        <div className="widget" aria-label={`Widget: ${description}`}>
            <div className="left">
                <h2 className="title">{description}</h2>
                <span className="counter">{value}</span>
                <Link to="/Transactions" style={{textDecoration: "none"}}>
                <span className="link">Ver detalhes de transações</span>
                </Link>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                   {porcentagem}
                </div>
                <AttachMoneyIcon className="icon" />
            </div>
        </div>
    )
}