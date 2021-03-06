import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, FormGroup, Form, Label, Input} from 'reactstrap';

import {userActions} from '../actions';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login({email: this.state.email, password: this.state.password});
    };

    render() {
        return (
            <div>
                <h1>Регистрация</h1>
                <p>Если Вы уже зарегистрированы, перейдите на страницу<Link to="auth-page">авторизации.</Link></p>
                <Form>
                    <fieldset id="account">
                        <legend>Основные данные</legend>
                        <FormGroup inline>
                            <Label for="firstName">Имя</Label>
                            <Input
                                type="text"
                                name="firstName"
                                placeholder="Имя"
                                onChange={this.handleChange}
                                value={this.state.firstName}
                            />
                        </FormGroup>
                        <FormGroup inline>
                            <Label for="lastName">Фамилия</Label>
                            <Input
                                type="text"
                                name="lastName"
                                placeholder="Фамилия"
                                onChange={this.handleChange}
                                value={this.state.lastName}
                            />
                        </FormGroup>
                        <FormGroup inline>
                            <Label for="email">E-Mail</Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Для инофрмирования о заказе"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </FormGroup>
                        <FormGroup inline>
                            <Label for="phone">Фамилия</Label>
                            <Input
                                type="text"
                                name="phone"
                                placeholder="Для инофрмирования о заказе"
                                onChange={this.handleChange}
                                value={this.state.phone}
                            />
                        </FormGroup>
                    </fieldset>
                    <fieldset id="address">
                        <legend>Ваш адрес</legend>
                        <FormGroup inline>
                            <Label for="address">Адрес доставки</Label>
                            <Input
                                type="text"
                                name="address"
                                placeholder="улица, дом, подьезд, кв."
                                onChange={this.handleChange}
                                value={this.state.address}
                            />
                        </FormGroup>
                    </fieldset>
                    <fieldset id="passwords">
                        <legend>Ваш пароль</legend>
                        <FormGroup>
                            <Label for="originalPassword">Пароль</Label>
                            <Input
                                type="password"
                                name="originalPassword"
                                placeholder="Пароль"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Подтверджения пароля</Label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                placeholder="Подтверджения пароля"
                                onChange={this.handleChange}
                                value={this.state.confirmPassword}
                            />
                        </FormGroup>
                    </fieldset>
                    <Button disabled={!this.validateForm()} type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}
//
//
// const mapDispatchToProps = dispatch => ({
//     login: userActions.login(dispatch)
// });

// export default connect(
//     null,
//     mapDispatchToProps,
// )(Login);