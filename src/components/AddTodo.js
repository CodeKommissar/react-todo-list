import React from 'react';

export default class AddTodo extends React.Component {
    handlePressEnter = (e) => {
        e.preventDefault();
        const todo = e.target.elements.todo.value.trim();
        e.target.elements.todo.value = "";

        this.props.handleAddTodo(todo);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlePressEnter}>
                    <input 
                        className="add-todo__input" 
                        type="text" 
                        name="todo"
                        placeholder="Add New Todo" 
                    />
                </form>
            </div>
        );
    }
}

