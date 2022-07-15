import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import '../../../assets/css/videoCards.css';
import { BrowserRouter as Router, Link, Route,Routes,NavLink } from 'react-router-dom';
import ProductsPage from "../../../pages/ProductsPage";

interface Props {
    linkUrl:string;
    textButton:string;
}

class ProductButton extends React.Component<Props, {}>{
    render() {
        return(
            <Row className="button-div">
               <div className="button-open">
                   <Link to={this.props.linkUrl} className="links">
                   <Row>
                       <div className="button-open-text">{this.props.textButton}</div>

                   </Row>
                   </Link>
               </div>

            </Row>

        )
    }
}
export default ProductButton;