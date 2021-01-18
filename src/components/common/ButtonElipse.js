import React from 'react';
import './ButtonElipse.scss';

function ButtonElipse({
  classname,
  onclick,
  icon,
  ...props
}) {
  return (
    <button className={`button-elipse ${classname}`} onClick={onclick}>
      <i className={`fas fa-${icon}`}></i>
    </button>
  )
}

export default ButtonElipse;