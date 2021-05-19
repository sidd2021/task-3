import React, { Component } from "react";
import classes from "./header.module.css";
class Header extends Component {
  render() {
    return (
      <div className={classes.header}>
        <nav className={classes.navigation}>
          <a href="/Home">Home</a>
          <a href="/Cources">Cources</a>
          <a href="/About">About</a>
        </nav>
      </div>
    );
  }
}
export default Header;
