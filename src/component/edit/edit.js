import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class Add extends Component {
  state = {
    title: this.props.location.data ? this.props.location.data.arr[0] : null,
    author: this.props.location.data ? this.props.location.data.arr[1] : null,
    category: this.props.location.data ? this.props.location.data.arr[2] : null,
    length: this.props.location.data ? this.props.location.data.arr[3] : null,
    key: this.props.location.data
      ? this.props.location.data.arr[this.props.location.data.arr.length - 1]
      : null,
  };
  titleHandler = (event) => {
    const val = event.target.value;
    this.setState({ title: val });
  };
  authorHandler = (event) => {
    const val = event.target.value;
    this.setState({ author: val });
  };
  categoryHandler = (event) => {
    const val = event.target.value;
    this.setState({ category: val });
  };
  lengthHandler = (event) => {
    const val = event.target.value;
    this.setState({ length: val });
  };
  onSubmitHandler = () => {
    console.log(this.state);
    var data = this.state;
    console.log(data);
    return this.props.saveToStore(data, this.state.key);
  };
  render() {
    // console.log();
    if (this.props.location.data !== undefined) {
      let title = this.props.location.data.arr[0];
      let author = this.props.location.data.arr[1];
      let category = this.props.location.data.arr[2];
      let length = this.props.location.data.arr[3];
      // let key = this.props.location.data.arr[4];
      return (
        <div className="main">
          <div className="form" id="form" onSubmit={this.formSubmitHandler}>
            <h1>Edit</h1>
            <label>Title</label>
            <input defaultValue={title} onChange={this.titleHandler}></input>

            <label>Author</label>
            <select onChange={this.authorHandler} defaultValue={author}>
              <option></option>
              <option>Cory House</option>
              <option>Scot Allen</option>
              <option>Den Wahlin</option>
            </select>

            <label>Category</label>
            <input
              defaultValue={category}
              onChange={this.categoryHandler}
            ></input>

            <label>Length</label>
            <input defaultValue={length} onChange={this.lengthHandler}></input>

            <div className="buttons">
              <Link to="/Cources">
                <button className="b1" onClick={this.onSubmitHandler}>
                  <FontAwesomeIcon className="icons" icon={faPaperPlane} />
                  Submit
                </button>
              </Link>
              <Link to="/Cources">
                <button className="b3" onClick={this.props.cancleHandler}>
                  Cancle
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  console.log(state.buttons);
  return {
    buttons: state.buttons,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveToStore: (data, key) => {
      return dispatch({ type: "editform", value: data, key: key });
    },
    cancleHandler: () => {
      return dispatch({ type: "cancle" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Add));
