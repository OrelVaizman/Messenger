
import React, { useEffect, useState } from 'react'

import './MessengerApp.scss'
import UserForm from '../../cmps/UserForm/UserForm';
import Feed from '../../cmps/Feed/Feed';
import { MessengerService } from '../../services/MessengerService';

const MessengerApp = (props) => {
    const [messages, setMessages] = useState(null)
    const [filterBy, setFilterBy] = useState({ email: '' })
    useEffect(() => {
        getMessages(filterBy)
    }, [filterBy])

    const getMessages = async (filterBy) => {
        const loadedMessages = await MessengerService.query(filterBy)
        setMessages(loadedMessages)
    }

    const submitMessage = async (message) => {
        await MessengerService.addMessage(message)
        getMessages(filterBy)
    }

    return (
        <section className="messenger-app flex column align-center">
            <div className="welcome-msg container flex center-center">Welcome SkillSet!</div>
            <div className="app-container">
                <UserForm backgroundColor="rgb(239,239,239)" submitMessage={submitMessage} />
                {messages && <Feed backgroundColor="white" messages={messages} setFilterBy={setFilterBy} filterBy={filterBy} />}
            </div>
        </section>
    )


}

export default MessengerApp
