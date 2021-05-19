import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./component/header/header";
import Body from "./container/body/body";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Body />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
