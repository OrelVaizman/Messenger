
import React from 'react'

import './List.scss'
import Preview from '../Preview/Preview';

const List = ({ messages }) => {

    return (
        <ul className="list clean-list flex column">
            {messages.map((message) => <Preview key={message._id} message={message} />)}
        </ul>
    )


}

export default List
