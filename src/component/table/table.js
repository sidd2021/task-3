import React, { Component } from "react";
import { connect } from "react-redux";
import Show from "../show/show";
import classes from "./table.module.css";
class Table extends Component {
  clickHandler = (id) => {
    console.log(id);
  };
  render() {
    let idx = 0;
    let value1 = this.props.data.map((ele) => {
      const d1 = Object.values(ele);
      return (
        <Show
          data={d1}
          key={this.props.count + ele[0]}
          count={this.props.count}
          id={ele[0]}
          color={this.props.color[idx++]}
        />
      );
    });
    return <div className={classes.table}>{value1}</div>;
  }
}
const mapStateToProps = (state) => {
  const d1 = Object.entries(state);
  const d2 = d1.filter((ele) => {
    return (
      ele[0] !== "count" &&
      ele[0] !== "newdata" &&
      ele[0] !== "selectedPrev" &&
      ele[0] !== "buttons" &&
      ele[0] !== "color"
    );
  });
  return {
    data: d2,
    count: state.count,
    color: state.color,
  };
};

export default connect(mapStateToProps)(Table);
