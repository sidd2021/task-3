import React, { Component } from "react";
import classes from "./show.module.css";
import { connect } from "react-redux";
class Show extends Component {
  state = {
    clicked: false,
  };
  clickHandler = (key, data) => {
    let arr = data;
    arr.push(key);
    this.setState({ clicked: !this.state.clicked });
    return this.props.saveToStore(arr, key);
  };
  render() {
    // let color = this.props.color ? false : this.props.color[1];
    let color = null;
    if (this.props.color !== undefined) {
      color = this.props.color[1];
    }
    if (!this.props.action) {
      let key = this.props.data[0];
      let data = Object.values(this.props.data[1]);
      return (
        <ul
          id={key}
          className={color ? classes.table1 : classes.table}
          onClick={() => {
            this.clickHandler(key, data);
          }}
        >
          <li>
            <a
              className={classes.linked}
              href="https://www.pluralsight.com/courses/react-flux-building-applications"
            >
              {data[0]}
            </a>
          </li>
          <li>{data[3]}</li>
          <li>{data[2]}</li>
          <li>{data[1]}</li>
        </ul>
      );
    }

    return <div></div>;
  }
}
const mapStateToProps = (state) => {
  return {
    action: state.action,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveToStore: (arr, key) => {
      return dispatch({ type: "show", arr: { arr }, key: key });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Show);
