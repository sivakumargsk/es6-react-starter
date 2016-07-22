import React from 'react';
import ItemsLeft from './ItemsLeft.js'
import VisibilityFilters from './VisibilityFilters.js'
import ClearCompleted from './ClearCompleted.js'

export default React.createClass ({
  render: function () {
    return (
      <span>
        <ItemsLeft
          todos={this.props.todos} />
        <VisibilityFilters
          showAll={this.props.showAll}
          showCompleted={this.props.showCompleted}
          showActive={this.props.showActive} />
        <ClearCompleted
          clearOnclick={this.props.clearCompleted} />
      </span>
    );
  }
});
