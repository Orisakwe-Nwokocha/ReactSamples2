import logo from "../../asset/logo.png";
import style from "./navbar.module.css"


const Navbar = () => {
    return (
        <>
            <div className={style.nav}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={logo} alt="logo"/>
                    <h2 style={{color:"#263238", fontSize:" 30px"}}>Nexcent</h2>
                </div>

                <div className={style.midSection}>
                    <a href="https://chat.openai.com/" target="_blank" rel="noreferrer">
                        <p>Home</p>
                    </a>
                    <p>Service</p>
                    <p>Feature</p>
                    <p>Product</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
                    <button
                        style={{color: "#4caf4f", background: "none", border: "none", fontSize: "16px",
                            fontWeight: "500"}}>Login
                    </button>
                    <button
                        style={{padding: "10px", borderRadius: "4px", background: "#4caf4f", color: "#fff",
                            border: "none"}}>SignUp
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar;