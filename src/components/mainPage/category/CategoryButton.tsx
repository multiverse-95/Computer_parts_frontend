import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import '../../../assets/css/mainPage.css';
import { BrowserRouter as Router, Link, Route,Routes,NavLink } from 'react-router-dom';
import ProductsPage from "../../../pages/ProductsPage";

interface Props {
    linkUrl:string;
    imageUrl:string;
    textButton:string;
}

class CategoryButton extends React.Component<Props, {}>{
    render() {
        return(
            <Row className="button-div">

               <div className="button-cat">
                   <Link to={this.props.linkUrl} className="links">
                   <Row>
                           <Col xs={6} md={3}>
                               <img height="42" width="42" src={this.props.imageUrl} alt="category"/>
                           </Col>
                       <Col><p>{this.props.textButton}</p></Col>

                   </Row>
                   </Link>
               </div>

            </Row>

        )
    }
}
export default CategoryButton;