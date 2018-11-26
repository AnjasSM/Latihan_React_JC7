import React, { Component } from 'react';
import { FormGroup, Button, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class SignUpBertasbih extends Component {
    render () {
        return (
            <div>
                <center>
                    <h1>ini SignUpBertasbih</h1>
                        <form style={{ margin: "0 auto"}} className= "col-3">
                            <FormGroup>
                                <Label for="masukUsername">Username</Label>
                                <Input type="text" name="SUusername" ref="SUusername" innerRef="SUtbUsername" id="masukUsername" placeholder="Username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="masukEmail">Email</Label>
                                <Input type="text" name="SUEmail" ref="SUEmail" innerRef="SUtbEmail" id="masukEmail" placeholder="youremail@gmail.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="masukpasword">Password</Label>
                                <Input type="SUpassword" name="SUpassword" ref="SUpassword" innerRef="SUtbPassword" id="masukPassword" placeholder="********" />                                
                            </FormGroup>
                            <FormGroup>
                                <Label for="masukRepasword">Re-Type Password</Label>
                                <Input type="Repassword" name="Repassword" ref="Repassword" innerRef="tbRePassword" id="masukRePassword" placeholder="********" />                                
                            </FormGroup>
                            <Button color="success">
                                SignUp
                            </Button>

                        </form>
                </center>
            </div>
        );

        return <Redirect to="/signup" />
    }
}

export default SignUpBertasbih;