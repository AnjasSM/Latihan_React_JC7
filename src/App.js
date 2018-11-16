import React, { Component } from 'react';
import './App.css';
import './support/css/bootstrap.css'
import HeaderBertasbih from './components/HeaderBertasbih';
import ContentBertasbih from './components/ContentBertasbih';
import FooterBertasbih from './components/FooterBertasbih';



class App extends Component {
  render() {
    return (
      <div className={"container"}>
        <h1>Halo salam cuy</h1>
        <HeaderBertasbih 
          headerText={"Bertasbih commerce"}
          kulakin={100-99}
        />
        <ContentBertasbih>
          <p>Hay hay hay tuyul</p>
        </ContentBertasbih>
        <input type="button"  style= {{backgroundcolor: 'red'}}value="SiapBos" className="btn btn-primary" />
        <FooterBertasbih />
      </div>
      
    );
  }
}

export default App;

