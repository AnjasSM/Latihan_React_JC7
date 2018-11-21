import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeBertasbih extends Component {
    render() {
        return (
            <div>
                <h1>Ini Home</h1>
                <h2>{this.props.pikachu}</h2>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { pikachu: state.pikachu };
}

export default connect(mapStateToProps)(HomeBertasbih);