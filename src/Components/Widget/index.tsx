import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "./styles.scss";
export default function Widget({description, value, porcentagem}){
    return(
        <div className="widget">
            <div className="left">
                <span className="title">{description}</span>
                <span className="counter">{value}</span>
                <span className="link">See all transactions</span>
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