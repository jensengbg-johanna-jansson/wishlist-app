import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';

function InputField ({
    name,
    type, 
    placeholder,
    className,
    value,
    label,
    required,
    ...props
}) {
    const [showError, setShowError] = useState(false);
    const [addError, setAddError] = useState(false);
    const [inputValue, setInputValue] = useState();
    
    const handleBlur = () => {
        if(required === true) {
            if(inputValue === '' 
            || inputValue === null
            || inputValue === undefined) {
                setAddError(true);

                setTimeout(() => {
                    setShowError(true);
                }, 50);
            } else {
                setShowError(false);

                setTimeout(() => {
                    setAddError(false);
                }, 200);                 
            }        
        }
    }

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        props.onInputChange(e.target.value);
    }

    return (
        <div className={`input-primary ${className}`}>
            {label !== null ? <label htmlFor={name} className="input-label">{label}</label> : ''}
            <input 
                name={name}
                type={type}
                className={`input-primary-style`}
                placeholder={placeholder}
                value={value}
                onBlur={handleBlur}
                onChange={handleOnChange} />
            { addError === true ? <span className={`input-error ${showError === true ? 'input-error-show' : 'input-error-hide'}`}><p>Input cannot be empty</p></span> : ''}
        </div>
    )
}

InputField.defaultProps = {
    type: 'text',
    className: '',
    required: false
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    required: PropTypes.bool
}

export default InputField;