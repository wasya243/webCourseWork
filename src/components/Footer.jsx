import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// TODO: add list of actions for Информация
// TODO: add list of actions for Служба поддержки
// TODO: add list of actions for Личный кабинет
// TODO: maybe I should create a common component for this to avoid placing a lot of code inside of this file

const Footer = ({title}) => (
    <Container>
        <Row>
            <Col>
                Информация
            </Col>
            <Col>
                Служба поддержки
            </Col>
            <Col>
                Личный кабинет
            </Col>
        </Row>
    </Container>
);

export default Footer;