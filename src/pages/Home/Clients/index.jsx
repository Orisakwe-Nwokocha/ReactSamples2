import style from "./clients.module.css";
import logo0 from "../../../asset/Logo(0).png";
import logo1 from "../../../asset/Logo (1).png";
import logo2 from "../../../asset/Logo (2).png";
import logo3 from "../../../asset/Logo (3).png";
import logo4 from "../../../asset/Logo (4).png";
import logo5 from "../../../asset/Logo (5).png";
import logo6 from "../../../asset/Logo (6).png";
import group1 from "../../../asset/Group 1.png";
import {members} from "./data";




const Clients = () => {
    return (
        <>
            <div className={style.clients}>
                <p>Our Clients</p>
                <p>We have been working with some Fortune 500+ clients</p>
                <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                    <img src={logo0} alt="logo 0"/>
                    <img src={logo1} alt="logo 1"/>
                    <img src={logo2} alt="logo 2"/>
                    <img src={logo3} alt="logo 3"/>
                    <img src={logo4} alt="logo 4"/>
                    <img src={logo5} alt="logo 5"/>
                    <img src={logo6} alt="logo 6"/>
                </div>
            </div>

            <div className={style.member}>
                <p>Manage your entire community in a single system</p>
                <h6>Who is Nextcent suitable for?</h6>
            </div>

            <div className={style.member2}>
            {members.map((member, index) => (

                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src={member.image} alt={member.title} />
                        <h2>{member.title}</h2>
                        <p style={{width: "50%", textAlign: "center"}}>{member.text}</p>

                </div>
                ))}
            </div>


        </>
    );
};

export default Clients;