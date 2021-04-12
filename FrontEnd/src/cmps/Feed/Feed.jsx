
import React from 'react'

import './Feed.scss'
import List from '../List/List';
import Filter from '../Filter/Filter';

const Feed = ({ backgroundColor, messages, setFilterBy, filterBy }) => {
    return (
        <section className="feed container flex column relative" style={{ backgroundColor }}>
            <Filter setFilterBy={setFilterBy} filterBy={filterBy} />
            <List messages={messages} />
        </section>
    )


}

export default Feed
