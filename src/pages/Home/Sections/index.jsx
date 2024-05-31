import style from "./index.module.css";
import frame35 from "../../../asset/Frame 35.png";
import {data} from "./data";
import pana from "../../../asset/pana.png";



const Sections = () => {
    return (
        <>
            <div className={style.section}>
                <img src={frame35} alt="frame 35"/>
                <div>
                    <h1 style={{display: "inline-block"}}>The unseen of spending three <span
                        style={{color: "#4caf4f", display: "block"}}>years at Pixelgrade</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan
                        quam
                        vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                        tristique
                        iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam
                        vitae,
                        tempus sem. Donec elementum pulvinar odio.</p>
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
            <div className={style.section}>
                <div>
                    <p style={{marginBottom: "0", fontWeight: "bold", fontSize: "40px"}}>Helping a local <span
                        style={{color: "#4caf4f", display: "block"}}>business reinvent itself </span>
                        <span
                            style={
                                {
                                    margin: "0",
                                    fontSize: "small"
                                }}>We reached here with our hard work and dedication</span>
                    </p>
                </div>
                <div className={style.new}>
                    {data.map((value, index) => (
                        <div key={index} style={{ display: "inline-block", paddingRight: "80px"}}>
                            <img src={value.image} alt="icon" style={{ verticalAlign: "middle" }} />
                            <p style={{ display: "inline-block", verticalAlign: "middle",
                                marginTop: "30px", marginLeft: "10px" }}>
                                <span style={{fontSize: "large", fontWeight: "bold"}}> {value.firstText} </span> <br/>
                                <span style={{fontSize: "small", fontWeight: "lighter"}}> {value.secondText} </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={style.section}>
                <img src={pana} alt="logo"/>
                <div>
                    <h1>How to design your site footer like we did <span
                        style={{color: "#4caf4f", display: "block"}}> like we did </span></h1>
                    <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                        massa
                        nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                        In hac
                        habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod
                        augue
                        vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
                        efficitur
                        quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec
                        consectetur
                        faucibus ipsum id gravida.</p>
                    <button
                        style={{
                            color: "white",
                            background: "#4caf4f",
                            border: "none",
                            borderRadius: "5px",
                            padding: "15px 30px"}}>
                        Learn More
                    </button>
                </div>
            </div>



        </>
    )
}

export default Sections;