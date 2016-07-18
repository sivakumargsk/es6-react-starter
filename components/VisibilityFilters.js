import React from 'react';

export default React.createClass ({
  render: function () {
    return (
      <div>
      <input type='button' value='Show All' />
      <input type='button' value='Show Completed' />
      <input type='button' value='Show active' />
      </div>
    );
  }
});
