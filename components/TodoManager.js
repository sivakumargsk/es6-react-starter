import React from 'react';
import TodoList from './TodoList.js';
import NewTodo from './NewTodo.js';
import TodoFotter from './TodoFotter.js';

export default React.createClass({
  getInitialState: function() {
    return{ data: [{id: 1, text: 'Learning Clojure', active: true},
                   {id: 2, text: 'Learning Clojure Script', active: false},
                   {id: 3, text: 'Learning Redux & React', active: true}],
            nextTaskId: 4,
            visibilityType: 'showAll'};
  },

  addOnClick : function (){
    var newTodos = this.state.data.concat(
                   [{ id: this.state.nextTaskId,
                      text: document.getElementById('taskInput').value,
                      active: false }]);
    this.setState({ data: newTodos,
                    nextTaskId: this.state.nextTaskId + 1,
                    visibilityType: this.state.visibilityType});
    document.getElementById('taskInput').value = '';
  },

  toggleTodo: function (todo){
    var toggleTodos = this.state.data.map(function (i) {
      if (i.id == todo.id) {
        return Object.assign({}, i, {active: !i.active });
      }else{
        return i; }});
    this.setState({ data: toggleTodos,
                    nextTaskId: this.state.nextTaskId,
                    visibilityType: this.state.visibilityType});
  },

  removeTodo: function (todo){
    var remainingTodos = this.state.data.filter(function (i) {
      if (i.id != todo.id){
        return i;
      }
    });
    this.setState({ data: remainingTodos,
                    nextTaskId: this.state.nextTaskId,
                    visibilityType: this.state.visibilityType});
  },

  clearCompletedTodos: function (){
    var remainingTodos = this.state.data.filter(function (i) {
      if (i.active == false){
        return i;
      }
    });
    this.setState({ data: remainingTodos,
                    nextTaskId: this.state.nextTaskId,
                    visibilityType: this.state.visibilityType});
  },

  showAll: function (){
    this.setState({ data: this.state.data,
                    nextTaskId: this.state.nextTaskId,
                    visibilityType: 'SHOW_ALL'});
  },

  showCompleted: function (){
    this.setState({ data: this.state.data,
                    nextTaskId: this.state.nextTaskId,
                    visibilityType: 'SHOW_COMPLETED'});
  },

  showActive: function (){
    this.setState({ data: this.state.data,
                    nextTaskId: this.state.nextTaskId,
                    visibilityType: 'SHOW_ACTIVE'});
  },
  render: function() {
    return (
      <div>
      <NewTodo addOnClick={this.addOnClick}/>
      <TodoList
        todos={this.state.data}
        visibilityType={this.state.visibilityType}
        toggleTodo={this.toggleTodo}
        removeTodo={this.removeTodo} />
      <TodoFotter
        todos={this.state.data}
        showAll={this.showAll}
        showCompleted={this.showCompleted}
        showActive={this.showActive}
        clearCompleted={this.clearCompletedTodos}/>
      </div>
    );
  }
});
