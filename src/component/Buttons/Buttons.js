import React, { Component } from "react";
import classes from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Buttons extends Component {
  State = {
    deleteKey: null,
  };
  editHandler = () => {
    console.log(this.props.newdata);
  };
  DeleteHandler = () => {
    return this.props.deleteKey(this.props.newdata.arr[4]);
  };
  render() {
    return (
      <div className={classes.cource}>
        <span className={classes.title}>Cources</span>
        <div className={classes.buttons}>
          <Link to="/add">
            <button className={classes.New}>
              <FontAwesomeIcon icon={faPlus} className={classes.fontAwsome} />
              New
            </button>
          </Link>
          <Link
            to={{
              pathname: "/edit",
              data: this.props.newdata,
            }}
          >
            <button
              className={classes.Edit}
              disabled={!this.props.buttons}
              onClick={this.editHandler}
            >
              <FontAwesomeIcon icon={faPlus} className={classes.fontAwsome} />
              Edit
            </button>
          </Link>
          <button
            className={classes.Delete}
            disabled={!this.props.buttons}
            onClick={this.DeleteHandler}
          >
            <FontAwesomeIcon icon={faPlus} className={classes.fontAwsome} />
            Delete
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    newdata: state.newdata,
    buttons: state.buttons,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteKey: (key) => dispatch({ type: "delete", key: key }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
