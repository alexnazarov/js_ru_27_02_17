import React from 'react'
import Comment from './Comment'

export default (props) => {
    const {comments} = props
    const {isOpen} = props
    const commentComponents = isOpen
            ? comments.map(comment => <Comment key={comment.id} comment={comment} />)
            : null

    return (
        <ul>
            {commentComponents}
        </ul>
    )
}