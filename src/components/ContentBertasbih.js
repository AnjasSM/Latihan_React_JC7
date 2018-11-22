import React, { Component } from 'react';

class ContentBertasbih extends Component {
    render() {
        return (
            <div>
                <center>
                    <p>{this.props.contentHeader}</p>
                    {this.props.children}

                </center>
            </div>
        )
    }
}

export default ContentBertasbih; 