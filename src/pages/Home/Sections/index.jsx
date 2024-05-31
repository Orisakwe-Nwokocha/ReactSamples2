import style from "./index.module.css";
import frame35 from "../../../asset/Frame 35.png";
import {data} from "./data";


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
                            {margin: "0", fontSize: "small"}}>We reached here with our hard work and dedication</span>
                    </p>
                </div>
                <div className={style.new}>
                    {data.map((value, index) => (
                        <div key={index}>
                            <img src={value.image} alt="icon"/>
                            <p style={{marginTop: "0"}}>
                                <span style={{fontSize: "large", fontWeight: "bold"}}> {value.firstText} </span> <br/>
                                <span style={{fontSize: "small", fontWeight: "lighter"}}> {value.secondText} </span>
                            </p>
                        </div>
                        ))}
                </div>
            </div>


        </>
    )
}

export default Sections;