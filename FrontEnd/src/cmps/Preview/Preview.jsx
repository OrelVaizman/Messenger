
import React, { useState } from 'react'
import './Preview.scss'
import Avatar from '../Avatar/Avatar';
import Popup from '../Popup/Popup';

const Preview = ({ message }) => {
    const [isPopupOpen, setPopupState] = useState(false)
    const { email, txt } = message
    return (
        <section className="preview flex">
            <div className="gravatar-wrraper flex" onClick={() => setPopupState(!isPopupOpen)}>
                <Avatar email={email} height="50" width="50" />
                {isPopupOpen && <Popup email={email} />}
            </div>

            <div className="info flex column">
                <div className="email-info flex">{email}</div>
                <div className="message-info flex">{txt}</div>
            </div>
        </section >)


}

export default Preview
