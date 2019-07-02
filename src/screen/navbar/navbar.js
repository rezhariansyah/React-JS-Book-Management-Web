import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';
import './navbar.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" color="light" light expand="md">
        <div className="container">
            <NavbarBrand className="navbarBrand" href="/">BOOK</NavbarBrand>
        </div>
        </Navbar>
      </div>
    );
  }
}