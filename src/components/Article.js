import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props
        const {comments} = article
        const {isOpen} = this.state
        const body = isOpen
            ? <div>
                <section>{article.text}</section>
                <CommentList comments={comments} />
            </div>
            : null

        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article