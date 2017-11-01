import React from "react";

export default class Todo extends React.Component {
    state = {
        completed: false
    };
    handleCompletedTodo = () => {
        this.setState((prevState) => ({ completed: !prevState.completed }))
    };
    // Creating handleClickOnX function because you can't directly call
    // onClick={this.props.handleRemoveTodo(this.props.todoText)}
    // (it would get executed immediately)
    handleClickOnX = (e) => {
        this.props.handleRemoveTodo(this.props.todoText);
        e.stopPropagation();
    };
    render() {
        return (
            <li 
                onClick={this.handleCompletedTodo}
                className={`${this.state.completed ? 'todo--completed' : ''} todo`}
            >
                <span onClick={this.handleClickOnX}><i className={"fa fa-trash todo__icon"} aria-hidden="true"></i></span> {this.props.todoText}
            </li>
        );
    }
}