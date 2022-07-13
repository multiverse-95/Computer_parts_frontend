import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import '../../../assets/css/videoCards.css';
import ProductButton from "./ProductButton";

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
                                    <img className="productItem-image" height="180" width="280" src={this.props.imageUrl}  alt="category"/>
                                </div>
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <div className="nameProduct-div">
                                        <p>
                                            {this.props.nameProduct}
                                        </p>
                                    </div>
                                </Row>
                                <Row>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col><ProductButton linkUrl={this.props.linkUrl} textButton={this.props.textButton}></ProductButton></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
        )
    }
}
export default ProductItem;