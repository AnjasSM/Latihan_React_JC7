import React, { Component } from 'react';
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
    DropdownItem } from 'reactstrap';

class HeaderTok extends Component {
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
        return(
            // <div>
                
            //     <h1>{`${this.props.headerText} ${this.props.kulakin}`}</h1>
            // </div>
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">{this.props.navBrand}</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="">Register</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="">Login</NavLink>
                  </NavItem>
                  {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </Nav>
              </Collapse>
            </Navbar>
          </div>

        )
    }
}

export default HeaderTok;