import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Route } from 'react-router-dom';
import HeaderBertasbih from './components/HeaderBertasbih';
import ContentBertasbih from './components/ContentBertasbih';
import LoginBertasbih from './components/LoginBertasbih';
import HomeBertasbih from './components/HomeBertasbih';
import RegisterBertasbih from './components/RegisterBertasbih';

// import FooterBertasbih from './components/FooterBertasbih';
// import InputBertasbih from './components/InputBertasbih';
// import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class App extends Component {
  state = { content: 'Ini content' }

  onBtnOkClick = () => {
    this.setState({ content: 'Ini comberan'})
  };
  render() {
    var { content } = this.state;
    return (
      <div className={"container-fluid"}>
      <HeaderBertasbih 
        navBrand={"Cendol.in"}
          // headerText={"Bertasbih commerce"}
          // kulakin={100-99}
        />
        <div>
          <Route exact path="/" component= { HomeBertasbih }/>
          <Route path="/login" component={ LoginBertasbih }/>
          <Route path="/register" component={ RegisterBertasbih }/>
        </div>

        <ContentBertasbih contentHeader={ content } />

        <Button color="danger" onClick={this.onBtnOkClick}>DANGER</Button>
        {/* <Form style={{ margin: "0 auto"}} className="col-3">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="text" name="username" ref="username" innerRef="tbUsername" id="exampleUsername" placeholder="insert Username" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="********" />
        </FormGroup>
        <Button color="success"
          onClick={this.onBtnLoginClick}
        >
        Login
        </Button>
        
      </Form> */}
        
        {/* {<h1>Halo salam cuy</h1> */}
        
        {/* <ContentBertasbih contentHeader={ content } >
          <center><p>Hay hay hay tuyul</p></center>
        </ContentBertasbih>
        <input type="button" style= {{backgroundcolor: 'red'}} value="SiapBos" className="btn btn-primary" onClick={this.onBtnOkClick} />
        <FooterBertasbih />} */}
      </div>
      
    );
  }
}

export default App;

