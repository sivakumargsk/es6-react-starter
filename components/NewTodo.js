
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
      <span> New Todo </span>
      <input type='text' />
      <input type='button' value='Add' />
      </div>
    );
  }
});
