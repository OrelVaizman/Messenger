
import React from 'react'

import './Input.scss'

const Input = ({ onChangeHandler, handleKeyPress, value, placeholder, name, height, type, required }) => {
    if (type === 'textarea') return (
        <textarea className="input flex" style={{ height }} placeholder={placeholder} onChange={onChangeHandler} name={name} value={value} onKeyPress={handleKeyPress} required={required} />
    )
    return (
        <input className="input flex" style={{ height }} placeholder={placeholder} onChange={onChangeHandler} name={name} value={value} onKeyPress={handleKeyPress} type={type} required={required} />
    )


}

export default Input
