import "./side-bar.css"
import logo from "../../assets/logo.svg"


export default function SideBar () {

    return (
        <aside>
            <section className="side-bar-icons-container">
                <img src={logo} alt="logo" className="side-bar-logo"/>
                <div className="side-bar-icons">

                </div>
            </section>
             
            <h1>Barra Lateral</h1>
        </aside>    
    )

}