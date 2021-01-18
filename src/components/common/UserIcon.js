import React from 'react';
import './UserIcon.scss';

const UserIcon = ({
  classname,
  clickevent,
  ...props
}) => {
  return (
    <div className={`user-icon ${classname}`}>
      <i className="fas fa-kiwi-bird"></i>
    </div>
  )
}

export default UserIcon