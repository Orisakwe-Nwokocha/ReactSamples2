import logoN from '../../asset/LogoN.png';
import instagram from '../../asset/insta.png';
import web from '../../asset/web.png';
import twitter from '../../asset/twitter.png';
import youtube from '../../asset/youtube.png';
import send from '../../asset/send.png';
import style from './footer.module.css';

const Footer = () => {
    return (
        <>
            <div style={{backgroundColor: "#f5f7fa", display: "flex",
                alignItems: "center", justifyContent: "center", marginTop: "20px"}}>
                <button
                    style={{
                        color: "white",
                        background: "#4caf4f",
                        border: "none",
                        borderRadius: "5px",
                        padding: "3px 20px",
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "20px"
                    }}>
                    <div>
                        Get a Demo
                    </div>
                    <div >
                        <p>&#8594;</p>
                    </div>
                </button>

            </div>

            <footer className={style.footer}>
                <div>
                    <img src={logoN} alt="logo"/>
                    <p>Copyright © 2024 Nexcent ltd. <span style={{display: "block"}}>All rights reserved</span></p>
                    <div>
                        <img src={instagram} alt="instagram logo"/>
                        <img src={web} alt="web log0"/>
                        <img src={twitter} alt="twitter logo"/>
                        <img src={youtube} alt="youtube logo"/>
                    </div>
                </div>
                <div className={style.footerSide}>
                    <div>
                        <div><p>Company</p></div>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div>
                        <div><p>Support</p></div>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <p>Stay up to date</p>
                        <label>
                            <input placeholder="Your email address" className={style.input}/>
                            <img src={send} alt="send logo" className={style.image}/>
                        </label>
                    </div>
                </div>

            </footer>
        </>
    )
}


export default Footer;