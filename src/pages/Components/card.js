import "../../styles/card.css";
import training from "../../components/utils/zuri-training-img.svg";
import internship from "../../components/utils/zuri-internship-img.svg";
import talent from "../../components/utils/zuri-talent-img.svg";

function Card() {
    return (
        <div className="card-container">
            <div className="cards">
                <div className="card">
                    <div className="training">
                        <img src={training} className="image" alt="zuri-training-img" />
                        <p>
                            We understand a complete beginner cannot become a professional after a few weeks, the aim
                            here is to get you familiar enough with each the tools such that you’ll be able to continue
                            learning on your own with minimal support.
                        </p>
                        <p className="link">
                            <a href="https://training.zuri.team/">I want to be trained &gt;</a>
                        </p>
                    </div>
                    <div className="internship">
                        <img src={internship} className="image" alt="zuri-internship-img" />
                        <p>
                            We place you in a work simulation. We give you tasks every week, the tasks ranges from easy
                            to hard as you progress from stage to stage, making it to the final stage means you are
                            ready for actual work.
                        </p>
                        <p className="link">
                            <a href="/">I want to join the internship &gt;</a>
                        </p>
                    </div>
                    <div className="talent">
                        <img src={talent} className="image" alt="zuri-internship-img" />
                        <p>
                            Keeping pace with projects and being on the look out for the extremely talented individuals
                            has become ever more challenging. Here is where Zuri Team comes into play to bring the best
                            suited talent for your company
                        </p>
                        <p className="link">
                            <a href="/">I am looking for talent &gt;</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
