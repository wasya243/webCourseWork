import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {Link} from 'react-router-dom';

// TODO: move to the separate components
const loggedInLayout = () => (
    <DropdownMenu right>
        <DropdownItem>
            <Link to="/">Home</Link>
        </DropdownItem>
        <DropdownItem>
            <Link to="/path1">Path1</Link>
        </DropdownItem>
        <DropdownItem divider/>
        <DropdownItem>
            <Link to="/path2">Path2</Link>
        </DropdownItem>
    </DropdownMenu>
);

const notLoggedInLayot = () => (
    <DropdownMenu right>
        <DropdownItem>
            <Link to="/registration-page">Регистрация</Link>
        </DropdownItem>
        <DropdownItem divider/>
        <DropdownItem>
            <Link to="/auth-page">Авторизация</Link>
        </DropdownItem>
    </DropdownMenu>
);

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false
        }
    }

    setIsOpened = () => {
        this.setState({
            isOpened: !this.state.isOpened
        });
    };

    render() {
        const {isLoggedIn} = this.props;
        const {isOpened} = this.state;
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.setIsOpened}/>
                    <Collapse isOpen={isOpened} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                {/*{*/}
                                    {/*isLoggedIn*/}
                                        {/*? loggedInLayout()*/}
                                        {/*: notLoggedInLayot()*/}
                                {/*}*/}
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link to="/registration-page">Регистрация</Link>
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        <Link to="/auth-page">Авторизация</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}