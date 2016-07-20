import React from 'react';
import TodoList from './TodoList.js';
import NewTodo from './NewTodo.js';
import TodoFotter from './TodoFotter.js';

// yasnippets

var i = 4;

export default React.createClass({
  getInitialState: function() {
    return {
      data: [{id: 1, text: 'Buy milk', active: true},
             {id: 2, text: 'Do laundryyyyy', active: false},
             {id: 3, text: 'Read a book', active: true}],
      nextTaskId: 4 };
  },
  addOnClick : function (){
    var newTask = this.state.data.concat(
                   [{ id: this.state.nextTaskId,
                      text: document.getElementById('taskInput').value,
                      active: false }]);
    this.setState({data: newTask,
                   nextTaskId: this.state.nextTaskId + 1 });
    document.getElementById('taskInput').value = '';
  },
  render: function() {
    return (
      <div>
      <NewTodo addOnClick={this.addOnClick}/>
      <TodoList todos={this.state.data} />
      <TodoFotter todos={this.state.data} />
      </div>
    );
  }
});
