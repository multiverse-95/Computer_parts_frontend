import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route,Routes,NavLink } from 'react-router-dom';
import '../../../assets/css/videoCards.css';
import ProductButton from "./ProductButton";
import LikeButton from "./LikeButton";

interface Props {
    linkUrl:string;
    imageUrl:string;
    nameProduct:string;
    textButton:string;
}
class ProductItem extends React.Component<Props, {}>{
    render() {
        return(
                    <Row className="productItem">
                        <Row>
                            <Col md={4}>
                                <div className="productItemImage-div">
                                    <img className="productItem-image"  src={this.props.imageUrl}  alt="category"/>
                                </div>
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <div className="nameProduct-div">
                                        <Link to={this.props.linkUrl} className="links">
                                            <p>
                                                {this.props.nameProduct}
                                            </p>
                                    </Link>

                                    </div>
                                </Row>
                                <Row>
                                    <Col></Col>
                                    <Col><LikeButton linkUrl={this.props.linkUrl} imageUrl={require('../../../assets/images/icons/heart.png')}></LikeButton></Col>
                                    <Col><ProductButton linkUrl={this.props.linkUrl} textButton={this.props.textButton}></ProductButton></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
        )
    }
}
export default ProductItem;