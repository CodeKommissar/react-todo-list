import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Header from './Header';
import AddTodo from './AddTodo';
import Todos from './Todos';

export default class TodoListApp extends React.Component {
    state = {
        todos: [],
        displayAddTodo: true
    };
    handleAddTodo = (todoToAdd) => {
        if(todoToAdd) {
            this.setState((prevState) => ({
                todos: prevState.todos.concat(todoToAdd)
            }));
        }
    };
    handleRemoveTodo = (todoToRemove) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todoToRemove !== todo)
        }));
    };
    handleDisplayAddTodo = () => {
        this.setState((prevState) => ({
            displayAddTodo: !prevState.displayAddTodo
        }));
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("todos");
            const todos = JSON.parse(json);

            if(todos){
                this.setState(() => ({ todos }));
            }
        } catch(e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos.length !== this.state.todos.length){
            const json = JSON.stringify(this.state.todos);
            localStorage.setItem("todos", json);
        }
    }
    render() {
        return (
            <div className="container">
                <Header
                    handleDisplayAddTodo={this.handleDisplayAddTodo}
                />
                <CSSTransitionGroup
                    transitionName="add-todo-transition"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    component='div'>
                        {this.state.displayAddTodo ? ( <AddTodo handleAddTodo={this.handleAddTodo} />) : null}
                </CSSTransitionGroup>
                <Todos
                    todos={this.state.todos}
                    handleRemoveTodo={this.handleRemoveTodo}
                />
            </div>
        )
    }
}