import React, { Component } from 'react';

class ContentBertasbih extends Component {
    render() {
        return (
            <div>
                <center>
                    <p>Selamat anda tertipu</p>
                    {this.props.children}

                </center>
            </div>
        )
    }
}

export default ContentBertasbih;