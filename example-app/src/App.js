import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css'
import HeaderComponent from'./components/HeaderComponent';
import BodyComponent from'./components/BodyComponent';
import FooterComponent from'./components/FooterComponent';

class App extends Component {
  render() {
    return (
      <div>
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
      </div>
    );
  }
}

export default App;
