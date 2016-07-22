import React from 'react';

function countOnlyTrue (num, todo) {
  return todo.active? num: num+=1;
 }

export default React.createClass ({
  render: function () {
    return (
      <span>
      {this.props.todos.reduce(countOnlyTrue, 0)} items left
      </span>
    );
  }
});
