import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, toggleTodo } from '../reducers/todo';

const TodoItem = ({id, name, isComplete, toggleTodo}) => (
  <li>
    <input
      type="checkbox"
      checked={isComplete}
      onChange={() => toggleTodo(id)}
    />
    {name}
  </li>
);

class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return(
      <ul>
        {this.props.todos.map(todo =>
          <TodoItem key={todo.id} {...todo} toggleTodo={this.props.toggleTodo}/>)
        }
      </ul>
    )
  }
};

export default connect(
  (state) => ({todos: state.todo.todos}),
  { fetchTodos, toggleTodo }
)(TodoList);
