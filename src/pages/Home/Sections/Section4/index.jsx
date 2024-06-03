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
                <img src={image9} alt="logo" style={{width: "25%"}}/>
                <div style={{marginTop: "-10px"}}>
                    <p style={{color: "#5d5f64"}}>“We have enjoyed working with the JustGo system to setup and go live with our new membership
                        platform. The initial effort to organise it along the lines of how our sport currently
                        works was quick and relatively easy. The new system has already massively improved the
                        time and effort it takes to setup and process member and club applications. It will help us
                        to communicate with people in our sport in a much more effective way, and collect data to
                        help us improve how our sport is governed.”</p>
                    <p style={{color: "#4caf4f", display: "block", fontFamily: "Inter, San-Serif"}}> Tim Smith </p>
                    <p style={{color: "#9c9c9c", fontSize: "12px"}}>British Dragon Boat Racing Association.</p>
                    <div className={style.section4} style={{display: "flex", gap: "30px"}}>
                        <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                            <img src={logoBlue} alt="logoBlue" style={{width: "10%"}} />
                            <img src={logo1} alt="logo1" />
                            <img src={logo2} alt="logo2" />
                            <img src={logo3} alt="logo3" />
                            <img src={logo4} alt="logo4" />
                            <img src={logo5} alt="logo5" />
                        </div>
                        <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                            <div>
                                <p style={{color: "#4caf4f", display: "block"}}> Meet all customers </p>
                            </div>
                            <div>
                                <p style={{color: "#4caf4f", display: "block"}}>&#8594;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section4;