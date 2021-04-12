
import React from 'react'

import './Filter.scss'
import Input from '../Input/Input';

const Filter = ({ setFilterBy, filterBy }) => {
    const onChangeHandler = ({ target }) => {
        const field = target.name
        const value = target.value;
        setFilterBy({ [field]: value })
    }
    return (
        <section className="filter">
            <Input placeholder="Filter" name="email" value={filterBy.email} onChangeHandler={onChangeHandler} />
        </section>
    )


}

export default Filter
