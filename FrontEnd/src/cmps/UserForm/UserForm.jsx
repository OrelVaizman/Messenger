
import React, { useState } from 'react'

import './UserForm.scss'
import Input from '../Input/Input';
import { Button } from '../Button/Button';

const UserForm = ({ backgroundColor, submitMessage }) => {
    const [newMessage, setNewMessage] = useState({ email: '', txt: '' })
    const onChangeHandler = ({ target }) => {
        const field = target.name
        const value = target.value;
        setNewMessage({ ...newMessage, [field]: value });
    }
    const onSubmitForm = (ev) => {
        ev.preventDefault();
        submitMessage(newMessage)
        setNewMessage({ email: '', txt: '' })
    }
    const handleKeyPress = (target) => {
        if (target.charCode === 13) {
            onSubmitForm()
        }
    }
    const { email, txt } = newMessage
    return (
        <form className="user-form container flex column" style={{ backgroundColor }} onSubmit={onSubmitForm}>
            <Input placeholder="Email" name="email" value={email} onChangeHandler={onChangeHandler} onKeyPress={handleKeyPress} type="email" required={true} />
            <Input placeholder="Message" name="txt" value={txt} onChangeHandler={onChangeHandler} height="50px" type="textarea" onKeyPress={handleKeyPress} required={true} />
            <Button color="white" backgroundColor="rgb(110,167,218)" text="SUBMIT" fontWeight="bold" />
        </form>
    )


}

export default UserForm
