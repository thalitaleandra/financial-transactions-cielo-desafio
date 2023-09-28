import Charts from "@/Components/Charts";
import Feature from "@/Components/Featured";
import Navbar from "@/Components/NavBar";
import Sidebar from "@/Components/SideBar";
import TableTransactional from "@/Components/Table";
import Widget from "@/Components/Widget";
import "@/Pages/Home/styles.scss";

export default function Home () {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
             <Navbar/>
             <div className="widgets">
               <Widget />
               <Widget />
               <Widget />
             </div>
             <div className="charts">
                <Feature/>
                <Charts />
             </div>
             <div className="listContainer">
                <div className="listTitle">Latest Transactions</div>
                <TableTransactional />
             </div>
            </div>
        </div>
    )
}