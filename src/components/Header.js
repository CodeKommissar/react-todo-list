import React from 'react';

const Header = (props) => (
    <div>
        <h1 className="header__title">
            To-Do List 
            <i 
                onClick={props.handleDisplayAddTodo} 
                className="fa fa-plus header__icon" 
                aria-hidden="true"
            >
            </i>
        </h1>
    </div>
);

export default Header;