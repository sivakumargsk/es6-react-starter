import React from 'react';

function countOnlyTrue (num, bool) {
  return bool? num+=1:num;
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
