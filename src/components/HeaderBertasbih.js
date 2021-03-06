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
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { onUserLogOut, keepLogin } from '../actions';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

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

      componentDidMount() {
        const username = cookies.get('dataUser');
        if(username !== undefined) {
          this.props.keepLogin(username);
        }
      }

      onLogoutSelect = () => {
        this.props.onUserLogOut();
        cookies.remove('dataUser');
      }

    render() { 
        if (this.props.username === "") {
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
                    <NavLink href="/register">Register</NavLink>
                  </NavItem>
                  <NavItem>
                    <Link to="/login">
                    <NavLink href="">Login</NavLink> 
                    {/* kalo pake link ngak render ulang headernya jadi lebih enteng*/}
                    </Link>
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
    return (
    <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">{this.props.navBrand}</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {/* <NavItem>
            <NavLink href="">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Login</NavLink>
          </NavItem> */}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Hello, {this.props.username}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Profile
              </DropdownItem>
              <DropdownItem>
                Setting
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.onLogoutSelect}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
    )
    }
}

const mapStateToProps = (state) => {
  return { username: state.auth.username, error: state.auth.error };
}

export default connect (mapStateToProps, { onUserLogOut, keepLogin })(HeaderTok);