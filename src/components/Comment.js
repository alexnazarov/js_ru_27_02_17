import React from 'react'

export default (props) => {
    const {comment} = props

    return (
        <li><p>{comment.text}</p><p><strong>{comment.user}</strong></p></li>
    )
}