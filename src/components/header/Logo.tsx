import React from "react";
import '../../assets/css/header.css';
import {Link} from "react-router-dom";

class Logo extends React.Component{
    render() {
        return(
            <Link to="/" className="links">
                <div className="logo-div">
                    <div className="name-logo">Computer parts</div>
                </div>
            </Link>
        )
    }
}
export default Logo;