import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.css';

const CheckBox = ({
    id,
    onChange,
    className,
    ...props
}) => {
    return (
        <React.Fragment>
            <div className={`checkbox-container ${className}`}>
                <input 
                    type="checkbox"
                    id={id}
                    className="checkbox-input"
                    onChange={onChange} />
                <label htmlFor={id} className="checkbox-primary-style"></label>
            </div>
        </React.Fragment>
    )
}

CheckBox.defaultProps = {
    className: ''
}

CheckBox.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func
}

export default CheckBox;