import React from 'react';

export default React.createClass ({
  render: function () {
    return (
      <div>
      <input type='button' value='Show All'  onClick = {this.props.showAll} />
      <input type='button' value='Show Completed' onClick = {this.props.showCompleted} />
      <input type='button' value='Show active' onClick = {this.props.showActive} />
      </div>
    );
  }
});
