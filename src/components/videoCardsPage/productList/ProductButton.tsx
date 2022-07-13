import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import '../../../assets/css/mainPage.css';
import { BrowserRouter as Router, Link, Route,Routes,NavLink } from 'react-router-dom';
import VideoCardsPage from "../../../pages/VideoCardsPage";

interface Props {
    linkUrl:string;
    textButton:string;
}

class ProductButton extends React.Component<Props, {}>{
    render() {
        return(
            <Row className="button-div">

               <div className="button-cat">
                   <Link to={this.props.linkUrl} className="links">
                   <Row>
                       <Col><p>{this.props.textButton}</p></Col>

                   </Row>
                   </Link>
               </div>

            </Row>

        )
    }
}
export default ProductButton;