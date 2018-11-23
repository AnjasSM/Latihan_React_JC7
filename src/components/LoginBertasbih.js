import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { onUserLogin } from '../actions';

class LoginBertasbih extends Component {
    
    onBtnLoginClick = () => {
        var username = this.refs.username.refs.tbUsername.value;
        var password = this.refs.password.refs.tbPassword.value;
        this.props.onUserLogin( {username, password} )
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
                            </Form>

                    </center>
                </div>
            );
        }

        return <Redirect to="/" />
    }
}

const mapStateToProps = (state) => {
    return {username: state.username}
}

export default connect (mapStateToProps, { onUserLogin }) (LoginBertasbih);