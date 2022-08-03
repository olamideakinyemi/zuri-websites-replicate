import "../landingpage/style.css";
import logo1 from "../landingpage/utils/logo1.svg";
import HeroButton from "../landingpage/Components/herobutton";
import Card from "../landingpage/Components/card";
import left from "../landingpage/utils/left_bvmv7q.png";
import right from "../landingpage/utils/right_yz6hn3.png";
import facebook from "../landingpage/utils/fb.png";
import twitter from "../landingpage/utils/twitter.png";
import instagram from "../landingpage/utils/IG.png";
import linkedin from "../landingpage/utils/in.png";

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
            <div className="container">
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
            </div>
            <footer>
                <div className="footercontainer">
                    <div className="footerlogo">
                        <img src={logo1} className="App-logo" alt="logo" />
                    </div>
                    <div>
                        <h3>Links</h3>
                        <div className="footertext text">
                            <a href="https://flutterwave.com/store/zuriteam">Store</a>
                        </div>
                        <div className="text">
                            <a href="https://blog.zuri.team">Blog</a>
                        </div>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <p className="footertext text">
                            8 Jubliee-CMD Road, Magodo,
                            <br /> Lagos State
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
