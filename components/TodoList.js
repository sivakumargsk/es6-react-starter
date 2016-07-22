import React from 'react';

const TodoRow = React.createClass({
  render: function () {
    return (
      <li>
        <span
          style={{color: this.props.status ? 'green' : 'red', cursor: 'pointer'}}
          onClick={this.props.toggleTodo}>
            {this.props.text} </span>
        <input type='button' value='Remove' onClick={this.props.removeTodo} />
      </li>
    );
  }
});

export default React.createClass({
  genTodoRow: function(todo) {
    return (
      <TodoRow
        key={todo.id}
        text={todo.text}
        status={todo.active}
        toggleTodo = {this.props.toggleTodo.bind(null, todo)}
        removeTodo ={this.props.removeTodo.bind(null, todo)} />
    );
  },

  getVisibleTodos: function (todos, filter){
    switch (filter) {
      case 'SHOW_ALL':
            return todos;
      case 'SHOW_COMPLETED':
            return todos.filter(function (i){
                return i.active; }
        );
      case 'SHOW_ACTIVE':
            return todos.filter(function (i){
                return !i.active; }
       );
       default:
            return todos;
    }
  },
  showTodoList: function(todos, filterType) {
    return this.getVisibleTodos(todos, filterType).map(this.genTodoRow);
  },

  render: function() {
    return (
      <div>
        <h1>Todo List</h1>
          <ul> {this.showTodoList(this.props.todos, this.props.visibilityType)} </ul>
      </div>
    );
  }
});
