
import React, { useEffect, useState } from 'react'

import './Popup.scss'
import { MessengerService } from '../../services/MessengerService';
import List from '../List/List';

const Popup = ({ email }) => {
    const [messages, setMessages] = useState(null)
    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = async () => {
        const messages = await MessengerService.getByEmail(email)
        setMessages(messages)
    }
    return (
        <section className="popup flex column space-between">
            {messages && <List messages={messages} />
            }
            <h2>Press anywhere to exit</h2>
        </section>
    )


}

export default Popup
