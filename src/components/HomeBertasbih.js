import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class HomeBertasbih extends Component {

    state = { listMakanan: [] }
    componentDidMount() {
        axios.get('http://localhost:1997/rames')
        .then((res) => {
            console.log(res.data)
            this.setState({ listMakanan: res.data })
        }).catch((err)=> {
            console.log(err)
        }) 
    }
    
    renderListMakanan = () => {
        var listJSXMakanan = this.state.listMakanan.map((item) => {
            return (
                <div>
                    <h3>{item.nama}</h3>
                    <p>{item.description}</p>
                </div>
            )
        })
        return listJSXMakanan;
    }

    render() {
        // console.log(this.state.listMakanan)
        return (
            <div>
                <center>
                    <h1>Ini Home</h1>
                    {this.renderListMakanan()}
                    <h2>{this.props.pikachu}</h2>
                </center>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { pikachu: state.pikachu };
}

export default connect(mapStateToProps)(HomeBertasbih);