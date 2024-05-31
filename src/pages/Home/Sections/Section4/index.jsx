import style from "../index.module.css";
import image9 from "../../../../asset/image9.png";
import logoBlue from "../../../../asset/Vector.svg";
import logo1 from "../../../../asset/Logo (1).png";
import logo2 from "../../../../asset/Logo (2).png";
import logo3 from "../../../../asset/Logo (3).png";
import logo4 from "../../../../asset/Logo (4).png";
import logo5 from "../../../../asset/Logo (5).png";


const Section4 = () => {
    return (
        <>
            <div className={style.section}>
                <img src={image9} alt="logo"/>
                <div>
                    <p style={{color: "#5d5f64"}}>“We have enjoyed working with the JustGo system to setup and go live with our new membership
                        platform. The initial effort to organise it along the lines of how our sport currently
                        works was quick and relatively easy. The new system has already massively improved the
                        time and effort it takes to setup and process member and club applications. It will help us
                        to communicate with people in our sport in a much more effective way, and collect data to
                        help us improve how our sport is governed.”</p>
                    <h1 style={{color: "#4caf4f", display: "block"}}> Tim Smith </h1>
                    <p style={{color: "#9c9c9c"}}>British Dragon Boat Racing Association.</p>
                    <div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <img src={logoBlue} alt="logoBlue" />
                            <img src={logo1} alt="logoBlue" />
                            <img src={logo2} alt="logoBlue" />
                            <img src={logo3} alt="logoBlue" />
                            <img src={logo4} alt="logoBlue" />
                            <img src={logo5} alt="logoBlue" />
                        </div>
                        <div>
                            <div>
                                <p style={{color: "#4caf4f", display: "block"}}> Meet all customers </p>
                            </div>
                            <div>
                                <p style={{color: "#4caf4f", display: "block"}}>-></p>
                            </div>
                        </div>
                    </div>
                    <button
                        style={{
                            color: "white",
                            background: "#4caf4f",
                            border: "none",
                            borderRadius: "5px",
                            padding: "15px 30px"
                        }}>
                        Learn More
                    </button>
                </div>
            </div>

        </>
    )
}

export default Section4;