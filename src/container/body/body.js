import React, { Component } from "react";
import classes from "./body.module.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Add from "../../component/add/add";
import Table from "../../component/table/table";
import { connect } from "react-redux";
import Buttons from "../../component/Buttons/Buttons";
import Edit from "../../component/edit/edit";
class Body extends Component {
  render() {
    return (
      <Switch>
        <Route path="/add" component={Add} />
        <Route
          path="/Cources"
          render={() => (
            <div>
              <Buttons />
              <div className={classes.table_style}>
                <div className={classes.heading}>
                  <span>Title</span>
                  <span>Length</span>
                  <span>Category</span>
                  <span>Author</span>
                </div>
                <div className={classes.sudoeffect}>
                  <Table />
                </div>
              </div>
            </div>
          )}
        />
        <Route path="/edit" component={Edit} />
        <Redirect from="/" to="/Cources" />
      </Switch>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    count: state.count,
  };
};
export default connect(mapStateToProps)(Body);
