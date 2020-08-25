import React from "react";
import {connect} from "react-redux";
import {deleteTodo} from "../../actions/todoActionCreator" 

class TodoList extends React.Component {
  render = () => {
    return (
      <ul className="list-group">
        {this.props.tasks.map((item) => {
          return (
            <li className="list-group-item" key={item.id}>
              <span>
                <span>{item.title}</span>
                <span
                  className="float-right"
                  onClick={this.props.deleteTodo.bind(this, item.id)}
                >
                  Delete
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    );
  };
}

const mapStateToProps = (state) => {
  
  return {
    tasks: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
