import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Todo from './Todo';

const Todos = (props) => (
    <ul className="todos-list">
        <CSSTransitionGroup component="div"
            transitionName="todo"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={400}>
            {
                props.todos.map((todo) => (
                    <Todo 
                        key={todo}
                        todoText={todo}
                        handleRemoveTodo={props.handleRemoveTodo}
                    />
                ))
            }
        </CSSTransitionGroup>
    </ul>
);

export default Todos;
