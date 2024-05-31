import style from "../index.module.css";
import frame35 from "../../../../asset/Frame 35.png";

const Section1 = () => {
    return (
        <>
            <div className={style.section}>
                <img src={frame35} alt="frame 35"/>
                <div>
                    <h1 style={{display: "inline-block", color: "#4d4d4d"}}>The unseen of spending three <span
                        style={{color: "#4caf4f", display: "block"}}>years at Pixelgrade</span>
                    </h1>
                    <p style={{color: "#5d5f64"}}>When joining the JustGo Community, your success becomes our success. In other words,
                        our Customer Success team will be on hand from day one to ensure we understand your
                        requirements, share your goals and work with you for a smooth adoption of our software.</p>
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

export default Section1;