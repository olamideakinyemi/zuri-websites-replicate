import "../styles/style.css";
import logo1 from "../components/utils/logo1.svg";
import HeroButton from "../pages/Components/herobutton";
import Card from "../pages/Components/card";
import left from "../components/utils/left_bvmv7q.png";
import right from "../components/utils/right_yz6hn3.png";
import facebook from "../components/utils/fb.png";
import twitter from "../components/utils/twitter.png";
import instagram from "../components/utils/IG.png";
import linkedin from "../components/utils/in.png";

function Landingpage() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="center-logo">
                    <img src={logo1} className="App-logo" alt="logo" />
                </div>
                <div>
                    <h2>Learn, Build, Grow.</h2>
                    <p className="hero-desc">
                        Unlock your Brilliance with our hands-on <a href="https://training.zuri.team">beginner</a> and{" "}
                        <a href="https://internship.zuri.team">expert training</a>. Zuri Team has been immensely
                        successful in creating a global network of a highly adept intelligent workforce that can help
                        your company achieve their mission-critical{" "}
                        <a href="https://talent.zuri.team">projects and goals</a>
                    </p>
                </div>
                <div className="btn-div">
                    <HeroButton />
                </div>
            </header>
            <main>
                <div className="program-content">
                    <h3>BY ZURI Team</h3>
                    <p className="program-desc">
                        We cater for every level of <br></br>expertise and needs in the industry.
                    </p>
                </div>
                <div>
                    <div className="dotted">
                        <div className="leftdiv">
                            <img src={left} className="left" alt="dotted-img" />
                        </div>
                        <div className="rightdiv">
                            <img src={right} className="right" alt="dotted-img" />
                        </div>
                    </div>
                    <div className="cards">
                        <Card />
                    </div>
                </div>
            </main>
            <footer>
                <div className="footercontainer">
                    <div className="footerlogo">
                        <img src={logo1} className="flogo" alt="logo" />
                    </div>
                    <div>
                        <h3>Links</h3>
                        <div className="footertext text">
                            <a className="store" href="https://flutterwave.com/store/zuriteam">Store</a>
                        </div>
                        <div className="text">
                            <a href="https://blog.zuri.team">Blog</a>
                        </div>
                    </div>
                    <div className="contact">
                        <h3>Contact</h3>
                        <p className="footertext text address">
                            8 Jubliee-CMD Road, Magodo,
                            Lagos State
                        </p>
                        <div className=" mail">
                            <a href="mailto:hello@zuri.com">hello@zuri.team</a>
                        </div>
                    </div>
                    <div>
                        <h3>Follow Us</h3>
                        <div className="footertext">
                            <img src={facebook} className="socials" alt="logo" />
                            <img src={twitter} className="socials" alt="logo" />
                            <img src={instagram} className="socials" alt="logo" />
                            <img src={linkedin} className="socials" alt="logo" />
                        </div>
                    </div>
                </div>
                <div>
                    <hr />
                    <p className="copyright">
                    © 2020 ZURI TEAM
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Landingpage;
