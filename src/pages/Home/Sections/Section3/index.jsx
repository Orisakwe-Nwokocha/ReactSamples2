import style from "../index.module.css";
import pana from "../../../../asset/pana.png";


const Section3 = () => {
    return (
        <>
            <div className={style.section}>
                <img src={pana} alt="logo"/>
                <div>
                    <h1 style={{color: "#4d4d4d"}}>How to design your site footer like<span
                        style={{color: "#4caf4f", display: "block"}}> we did </span></h1>
                    <p style={{color: "#5d5f64"}}>One event calendar shared across National, Regional and Club events to simplify
                        your event experience. Allowing you to create waiting lists, share data capture,
                        issue credential for course completion, apply smart purchasing rules and much more.</p>
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

export default Section3;