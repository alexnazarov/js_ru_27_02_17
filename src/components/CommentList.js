import React, { Component } from 'react'

class CommentList extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
    render() {
        const {comments=[]} = this.props
        const commentComponents = this.state.isOpen
            ? comments.map(comment => <li key={comment.id}><p>{comment.text}</p><p><strong>{comment.user}</strong></p></li>)
            : null

        return (
            comments.length
                ? <div>
                    <p><button onClick={this.handleClick}>{this.state.isOpen ? 'Hide' : 'Show'} comments</button></p>
                    <ol>
                        {commentComponents}
                    </ol>
                </div>
                : null
        );
    }
    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList