import "../../styles/herobutton.css";
import React from "react";
import { Link } from "react-router-dom";

function herobutton() {
    return (
        <div className="Buttons">
            <div className="">
                <Link to="/Industry">
                    <button className="btn-1">I'm new to the Industry</button>
                </Link>
            </div>
            <div>
                <Link to="/Experience">
                    <button className="btn-2">I need industry experience</button>
                </Link>
            </div>
        </div>
    );
}

export default herobutton;
