import "./side-bar.css"
import logo from "../../assets/logo.svg"


export default function SideBar () {

    return (
        <aside>
            <img src={logo} alt="logo" className="side-bar-logo"/> 
            <h1>Barra Lateral</h1>
        </aside>    
    )

}