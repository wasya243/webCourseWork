import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

class App extends Component {

    render() {
        const {header, main, footer} = this.props;
        return (
            <div className="container">
                <Header isLoggedIn={this.props.isLoggedIn}/>
                <Main title={main}/>
                <Footer title={footer}/>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => ({
    isLoggedIn: user.isLoggedIn
});

export default connect(mapStateToProps, null)(App);
