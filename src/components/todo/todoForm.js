import React, { Component } from "react";
import {connect} from "react-redux";
import {addTodo} from "../../actions/todoActionCreator"

class TodoForm extends Component {
  state = { inputVal: "" };

  handleChange = (e) => {
   
    this.setState({
      inputVal: e.target.value,
    });
  };

  handleSubmit = () => {
    this.props.addTodo(this.state.inputVal);
    this.setState({
      inputVal: "",
    });
  };

  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          onChange={this.handleChange}
          value={this.state.inputVal}
        ></input>
        <button
          className="btn btn-primary btn-block"
          onClick={this.handleSubmit} 
          disabled={this.state.inputVal.length<1}
          
        >
          Add
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (itemStr) => {
      dispatch(addTodo(itemStr));
    },
  };
};

export default connect(null,mapDispatchToProps)(TodoForm);