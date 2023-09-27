import Sidebar from "@/Components/SideBar";
import "@/Pages/Home/styles.css";

export default function Home () {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
              container
            </div>
        </div>
    )
}