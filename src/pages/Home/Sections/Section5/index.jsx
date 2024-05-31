import style from "../index.module.css";
import pana from "../../../../asset/pana.png";


const Section5 = () => {
    return (
        <>
            <div style={{
                display: "grid", flexDirection: "column", justifyContent: "center",
                alignItems: "center", textAlign: "center" }}>
                <div>
                    <h1 style={{color: "#4d4d4d", margin: "0"}}>Caring is the new marketing</h1>
                </div>
                <div>
                    <p style={{color: "#5d5f64", marginTop: "10px"}}>The Nexcent blog is the best place to read about the latest
                        membership insights, <br/> trends and more. See who's joining the community, read about how
                        our community <br/> are increasing their membership income and lot's more.</p>
                </div>
            </div>
            <div className={style.section5}>

            </div>

        </>
    )
}

export default Section5;