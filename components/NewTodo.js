
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
      <span> New Todo </span>
      <input id='taskInput' type='text' />
      <input type='button' value='Add' onClick={this.props.addOnClick} />
      </div>
    );
  }
});
