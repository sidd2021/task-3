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
    titleText: "",
    authorText: "",
    categoryText: "",
    lengthText: "",
  };
  titleHandler = (event) => {
    const val = event.target.value;
    this.setState({ title: val, clear: false, titleText: "" });
  };
  authorHandler = (event) => {
    const val = event.target.value;
    this.setState({ author: val, clear: false, authorText: "" });
  };
  categoryHandler = (event) => {
    const val = event.target.value;
    this.setState({ category: val, clear: false, categoryText: "" });
  };
  lengthHandler = (event) => {
    const val = event.target.value;
    this.setState({ length: val, clear: false, lengthText: "" });
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
      return this.props.saveToStore({
        title: this.state.title,
        author: this.state.author,
        category: this.state.title,
        length: this.state.length,
      });
    } else {
      if (data.title === null) {
        var title = "Required";
      } else {
        title = "";
      }
      if (data.author === null) {
        var author = "Required";
      } else {
        author = "";
      }
      if (data.length === null) {
        var length = "Required";
      } else {
        length = "";
      }
      if (data.category === null) {
        var category = "Required";
      } else {
        category = "";
      }
      this.setState({
        redirect: false,
        titleText: title,
        authorText: author,
        categoryText: category,
        lengthText: length,
      });
    }
  };
  clearHandler = (event) => {
    event.preventDefault();
    let ele = document.getElementById("form");
    ele.reset();
    this.setState({
      title: null,
      author: null,
      category: null,
      length: null,
      redirect: false,
      clear: true,
      titleText: "",
      authorText: "",
      categoryText: "",
      lengthText: "",
    });
  };
  render() {
    let redirect = null;
    if (this.state.redirect) {
      redirect = <Redirect to="/Cources" />;
    }
    return (
      <div className="main">
        {redirect}
        <span className="heading">Add</span>
        <form
          className="form"
          id="form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>Title</label>
          <input
            placeholder="Title of cource"
            onChange={this.titleHandler}
          ></input>
          <span className="alert">{this.state.titleText}</span>

          <label>Author</label>
          <select onChange={this.authorHandler}>
            <option></option>
            <option>Cory House</option>
            <option>Scot Allen</option>
            <option>Den Wahlin</option>
          </select>
          <span className="alert"> {this.state.authorText}</span>
          <label>Category</label>
          <input
            placeholder="Category of the cource"
            onChange={this.categoryHandler}
          ></input>
          <span className="alert">{this.state.categoryText}</span>
          <label>Length</label>
          <input
            placeholder="Length of the cource in minute and hours"
            onChange={this.lengthHandler}
          ></input>
          <span className="alert">{this.state.lengthText}</span>
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
