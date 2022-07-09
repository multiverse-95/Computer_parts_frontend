import React from "react";
import {Col, Container, Row} from 'react-bootstrap';

interface Props {
    nameButton: string;
}

class CategoryButton extends React.Component<Props, {}>{
    render() {
        return(
            <Row>
                <div className="button-div">
                    <input type="button" className="button-cat" value={this.props.nameButton}>
                    </input>
                </div>
            </Row>
        )
    }
}
export default CategoryButton;