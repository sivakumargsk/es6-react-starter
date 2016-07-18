import React from 'react';

function countOnlyTrue (num, bool) {
  return bool? num+=1:num;
 }

const ItemLeft = React.createClass ({
  render: function () {
    return (
      <sapn> {this.props.todos.reduce(countOnlyTrue, 0)}</span>
    );
  }
});
