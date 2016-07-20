import React from 'react';

const TodoRow = React.createClass({
  render: function () {
    return (
      <li>
        <div>
          <span
            // onClick={this.props.toggleTodo}
            style= {{textDecoration: this.props.status ? 'line-through' : 'none',
                     cursor: 'pointer'}} >
              {this.props.text}
          </span>
          <input type='button' value='Remove' />
        </div>
      </li>
    );
  }
});

export default React.createClass({
  genTodoRow: function(todo) {
    return (
      <TodoRow key={todo.id}
               text={todo.text}
               status={todo.active} />
    );
  },
  render: function() {
    return (
      <div>
        <h1>Todo List</h1>
          <ul> {this.props.todos.map(this.genTodoRow)} </ul>
      </div>
    );
  }
});
