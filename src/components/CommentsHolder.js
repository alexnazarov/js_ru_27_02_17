import React, { Component } from 'react'
import CommentsList from './CommentsList'

class CommentsHolder extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
    render() {
        const {comments=[]} = this.props

        return (
            comments.length
                ? <div>
                    <p><button onClick={this.handleClick}>{this.state.isOpen ? 'Hide' : 'Show'} comments</button></p>
                    <CommentsList comments={comments} isOpen={this.state.isOpen} />
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

export default CommentsHolder