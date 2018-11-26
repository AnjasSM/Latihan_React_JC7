import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { onUserLogin } from '../actions';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LoginBertasbih extends Component {
    
    componentwillReceiveProps(newProps) {
        if(newProps.username !== '') {
            cookies.set('dataUser', newProps.username, { path: '/'})
        }
    }

    onBtnLoginClick = () => {
        var username = this.refs.username.refs.tbUsername.value;
        var password = this.refs.password.refs.tbPassword.value;
        this.props.onUserLogin( {username, password} )
    }

    renderError = () => {
        if(this.props.error.length > 0) {
            return <p className="alert alert-danger"></p>
        }
    }

    renderButton = () => {
        if(this.props.loading) {
            return <h2>Loading...</h2>
        }
        return <Button color="success"
                    onClick={this.onBtnLoginClick}>
                    Login
                </Button>
    }

    render() {
        if(this.props.username === "") {
            return (
                <div>
                    <center>
                        <h1>ini Login Bertasbih</h1>
                            <Form style={{ margin: "0 auto"}} className="col-3">
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="text" name="username" ref="username" innerRef="tbUsername" id="exampleUsername" placeholder="insert Username" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" ref="password" innerRef="tbPassword" id="examplePassword" placeholder="********" />
                                </FormGroup>
                                <Button color="success"
                                    onClick={this.onBtnLoginClick}>
                                    Login
                                </Button>
                                {this.renderError}
                                {this.renderButton}
                            </Form>

                    </center>
                </div>
            );
        }

        return <Redirect to="/" />
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        error: state.auth.error,
        loading: state.auth.loading
    };
}

export default connect (mapStateToProps, { onUserLogin }) (LoginBertasbih);