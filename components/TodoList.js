import React from 'react';

const TodoRow = React.createClass({
    render: function () {
        return (
        <li>
            <span>{this.props.text}</span>
            <span>{this.props.status ? 'Active' : 'Pending'}</span>
            <input type='button' value='Remove' />
            </li>
        );
    }
});

const genTodoRow = function(todo) {
    return (
            <TodoRow key={todo.id} text={todo.text} status={todo.active} />
    );
};

export default React.createClass({
    render: function() {
        return (
            <div>
            <h1>Todo List</h1>
                <ul>
                {this.props.todos.map(genTodoRow)}
                </ul>
                </div>
        );
    }
});

//export TodoList;
