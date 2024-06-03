import style from "../index.module.css";
import {data} from "../data";

const Section2 = () => {
    return (
        <>
            <div className={style.section} style={{backgroundColor: "#f5f7fa"}}>
                <div>
                    <p style={{marginBottom: "0", fontWeight: "bold", fontSize: "40px", color: "#4d4d4d"}}>
                        Helping a local <span
                        style={{color: "#4caf4f", display: "block"}}>business reinvent itself </span>
                        <span
                            style={
                                {
                                    margin: "0",
                                    fontSize: "small",
                                    color: "#5d5f64"
                                }}>We reached here with our hard work and dedication</span>
                    </p>
                </div>
                <div className={style.new}>
                    {data.map((value, index) => (
                        <div key={index} style={{display: "inline-block", paddingRight: "80px"}}>
                            <img src={value.image} alt="icon" style={{verticalAlign: "middle"}}/>
                            <p className={style.section2P}>
                                <span style={{fontSize: "large", fontWeight: "bold", color: "#4d4d4d"}}> {value.firstText} </span> <br/>
                                <span style={{fontSize: "small", fontWeight: "lighter", color: "#9c9c9c"}}> {value.secondText} </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Section2;