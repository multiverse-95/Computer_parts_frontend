import React from "react";
import '../../assets/css/header.css';
class Avatar extends React.Component{
    render() {
        return(
            <div >
                <img className="avatar-div" height="70" width="70" src={require('../../assets/images/avatar/user.png')}  alt="category"/>
            </div>
        )
    }
}
export default Avatar;