import React from 'react';
import './AddButton.css';

function addButton(props) {
    return <button className={`add-button ${props.styleName}`} onClick={props.handleClick}><i className="fas fa-plus"></i></button>
}

export default addButton;