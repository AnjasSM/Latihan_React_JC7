import React, { Component } from 'react';

class RegisterBertasbih extends Component {
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
                            <input className="input--style-3" type="text" placeholder="Name" name="name" />
                        </div>
                        <div className="input-group">
                            <input className="input--style-3 js-datepicker" type="text" placeholder="Birthdate" name="birthday" />
                            <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />
                        </div>
                        {/* <div className="input-group">
                            <div className="rs-select2 js-select-simple select--no-search">
                            <select name="gender">
                                <option disabled="disabled" selected="selected">Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                            <div className="select-dropdown" />
                            </div>
                        </div> */}
                        <div className="input-group">
                            <input className="input--style-3" type="email" placeholder="Email" name="email" />
                        </div>
                        <div className="input-group">
                            <input className="input--style-3" type="text" placeholder="Phone" name="phone" />
                        </div>
                        <div className="p-t-10">
                            <button className="btn btn--pill btn--green" type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            
        )
    }
}

export default RegisterBertasbih;