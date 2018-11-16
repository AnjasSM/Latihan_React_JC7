import React, { Component } from 'react';

class HeaderTok extends Component {
    render() { 
        return(
            <div>
            
                <h1>{`${this.props.headerText} ${this.props.kulakin}`}</h1>
            </div>

        )
    }
}

export default HeaderTok;