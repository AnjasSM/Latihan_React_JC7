import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onUserRegister } from '../actions';

class RegisterBertasbih extends Component {

    onBtnRegisterClick = () => {
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        var email = this.refs.email.value;
        var phone = this.refs.phone.value;

        this.props.onUserRegister({ username, password, email, phone });
    }

    render () {
        return (
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading" />
                    <div className="card-body">
                        <h2 className="title">Registration Form</h2>
                        <form method="POST">
                        <div className="input-group">
                            <input className="input--style-3"  ref= "username" type="text" placeholder="username" name="username" />
                        </div>
                        <div className="input-group">
                            <input className="input--style-3 js-datepicker" ref= "password" type="password" placeholder="password" name="password" />
                            {/* <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" /> */}
                        </div>
                        <div className="input-group">
                            <input className="input--style-3" ref="email" type="email" placeholder="Email" name="email" />
                        </div>
                        <div className="input-group">
                            <input className="input--style-3" ref="phone" type="text" placeholder="Phone" name="phone" />
                        </div>
                        <div className="p-t-10">
                            <button className="btn btn--pill btn--green" type="button" onClick={this.onBtnRegisterClick}>Submit</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            
        )
    }
}

export default connect(null, { onUserRegister} )(RegisterBertasbih);