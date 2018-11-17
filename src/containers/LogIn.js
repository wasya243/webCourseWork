import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, Form, Label, Input} from 'reactstrap';

import {userActions} from '../actions';

// TODO: на русский переделать

class Login extends Component {
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
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="your@email.com"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="enter password here"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                </FormGroup>
                <Button disabled={!this.validateForm()} type="submit">Submit</Button>
            </Form>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    login: userActions.login(dispatch)
});

export default connect(
    null,
    mapDispatchToProps,
)(Login);