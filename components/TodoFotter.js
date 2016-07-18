import React from 'react';
import ItemsLeft from './ItemsLeft.js'
import VisibilityFilters from './VisibilityFilters.js'
import ClearCompleted from './ClearCompleted.js'

export default React.createClass ({
  render: function () {
    return (
      <div>
      <ItemsLeft todos={this.props.todos} />
      <VisibilityFilters />
      <ClearCompleted />
      </div>
    );
  }
});
