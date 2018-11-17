import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Login from './LogIn';

// TODO: implement registration page

const REGISTRATION_DESCRIPTION = `Создание учетной записи поможет покупать быстрее. Вы сможете контролировать состояние заказа, 
а также просматривать заказы сделанные ранее. Вы сможете накапливать призовые баллы и получать скидочные купоны.
А постоянным покупателям мы предлагаем гибкую систему скидок и персональное обслуживание.`;

export default class AuthorizationPage extends Component {

    render() {
        return (
            <div>AuthorizationPage</div>
        );
    }
}

{/*<Container>*/}
    {/*<Row>*/}
        {/*<Col>*/}
            {/*<div>*/}
                {/*<h2>Новый клиент</h2>*/}
                {/*<p>Регистрация</p>*/}
                {/*<p>{REGISTRATION_DESCRIPTION}</p>*/}
                {/*<Link to="/registration-page">Продолжить</Link>*/}
            {/*</div>*/}
        {/*</Col>*/}
        {/*<Col>*/}
            {/*<h2>Зарегистрированный клиент</h2>*/}
            {/*<p>Войти в Личный Кабинет</p>*/}
            {/*<Login/>*/}
        {/*</Col>*/}
    {/*</Row>*/}
{/*</Container>*/}