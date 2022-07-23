import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import '../../../assets/css/productsPage.css';
import { BrowserRouter as Router, Link, Route,Routes,NavLink } from 'react-router-dom';

interface Props {
    linkUrl:string;
    imageUrl:string;
}

class LikeButton extends React.Component<Props, {}>{
    render() {
        return(
            <Row className="button-div">

                <div className="button-like">
                    <Link to={this.props.linkUrl} className="links">
                        <Row>
                            <img height="50" width="50" src={this.props.imageUrl} alt="category"/>
                        </Row>
                    </Link>
                </div>

            </Row>

        )
    }
}
export default LikeButton;