import React from "react";
import {Col, Container, Row} from 'react-bootstrap';

interface Props {
    imageUrl:string;
    textButton:string;
}

class CategoryButton extends React.Component<Props, {}>{
    render() {
        return(
            <Row className="button-div">
               <div className="button-cat">
                   <Row>
                       <Col xs={6} md={3}><img height="42" width="42" src={this.props.imageUrl}  alt="category"/></Col>
                       <Col>{this.props.textButton}</Col>
                   </Row>
               </div>
            </Row>
        )
    }
}
export default CategoryButton;