import React, { Component } from "react";
import "./add.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class Add extends Component {
  state = {
    title: null,
    author: null,
    category: null,
    length: null,
    clear: true,
    redirect: false,
  };
  titleHandler = (event) => {
    const val = event.target.value;
    this.setState({ title: val, clear: false });
  };
  authorHandler = (event) => {
    const val = event.target.value;
    this.setState({ author: val, clear: false });
  };
  categoryHandler = (event) => {
    const val = event.target.value;
    this.setState({ category: val, clear: false });
  };
  lengthHandler = (event) => {
    const val = event.target.value;
    this.setState({ length: val, clear: false });
  };
  onSubmitHandler = () => {
    var data = this.state;
    if (
      data.author !== null &&
      data.category !== null &&
      data.title !== null &&
      data.length !== null
    ) {
      this.setState({ redirect: true });
      return this.props.saveToStore(data);
    } else {
      this.setState({ redirect: false });
    }
  };
  clearHandler = (event) => {
    event.preventDefault();
    let ele = document.getElementById("form");
    ele.reset();
    this.setState({ title: null, author: null, category: null, length: null });
  };
  render() {
    let redirect = null;
    if (this.state.redirect) {
      redirect = <Redirect to="/Cources" />;
    }
    return (
      <div className="main">
        {redirect}
        <form className="form" id="form" onSubmit={this.formSubmitHandler}>
          <h1>Add</h1>
          <label>Title</label>
          <input
            required
            placeholder="Title of cource"
            onChange={this.titleHandler}
          ></input>

          <label>Author</label>
          <select required onChange={this.authorHandler}>
            <option></option>
            <option>Cory House</option>
            <option>Scot Allen</option>
            <option>Den Wahlin</option>
          </select>

          <label>Category</label>
          <input
            required
            placeholder="Category of the cource"
            onChange={this.categoryHandler}
          ></input>

          <label>Length</label>
          <input
            required
            placeholder="Length of the cource in minute and hours"
            onChange={this.lengthHandler}
          ></input>

          <div className="buttons">
            <button className="b1" onClick={this.onSubmitHandler}>
              <FontAwesomeIcon className="icons" icon={faPaperPlane} />
              Submit
            </button>
            <button
              className="b2"
              disabled={this.state.clear}
              onClick={this.clearHandler}
            >
              Clear
            </button>
            <Link to="/Cources">
              <button className="b3">Cancle</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveToStore: (data) => {
      return dispatch({ type: "submit", value: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Add));
