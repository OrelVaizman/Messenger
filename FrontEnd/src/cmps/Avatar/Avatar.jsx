
import React from 'react'
import './Avatar.scss'
import md5 from 'md5';

const Avatar = ({ email, height, width }) => {
    return (
        <img src={`//www.gravatar.com/avatar/${md5(email)}?d=retro&amp;r=g&amp;s=50`} className="avatar" alt={email} height={height} width={width} />
    )


}

export default Avatar
