import style from "../index.module.css";
import {data} from "./data";


const Section5 = () => {
    return (
        <div style={{ marginBottom: "50px" }}>
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
                {data.map((item, index) => (
                    <div key={index}>
                        <div>
                            <div>
                                <img src={item.image} alt={item.text}
                                     style={{width:"70%", paddingLeft: "57px"}}/>
                                <div className={style.box} style={{
                                    display: "grid",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center"}}>
                                    <div>
                                        <p style={{color: "#4d4d4d"}}>
                                            {item.firstText} <br/> {item.secondText} <br/> {item.thirdText}
                                        </p>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "10px",
                                        justifyContent: "center",
                                        marginTop: "-20px"}}>
                                        <div>
                                            <p style={{color: "#4caf4f", display: "block"}}> Readmore </p>
                                        </div>
                                        <div>
                                            <p style={{color: "#4caf4f", display: "block"}}>&#8594;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Section5;