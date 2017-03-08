import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        return (
            <div>
                <a href="#" onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        if (!comments.length) {
            return <div>
                <h3>
                    No comments yet
                </h3>
            </div>
        }

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
}

export default toggleOpen(CommentList)