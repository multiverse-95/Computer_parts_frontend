
import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import Search from "./Search";
import Logo from "./Logo";
import Avatar from "./Avatar";

class Header extends React.Component {
    render(){
        return (
            <div className="header-tab">
            <Container fluid>
                <Row>
                    <Row className="header-row">
                        <Col>
                            <Logo></Logo>
                        </Col>
                        <Col xs={6}>
                            <Search></Search>
                        </Col>
                        <Col>
                            <Avatar></Avatar>
                        </Col>
                    </Row>
                </Row>
            </Container>
            </div>
        )

    }
}

export default Header;