import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import Loader from './Loader'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import {loadCommentsById} from '../AC'
import {connect} from 'react-redux'

class CommentList extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    componentWillReceiveProps({isOpen, article, loadCommentsById}) {
        if (!this.props.isOpen && isOpen && !article.commentsLoaded) loadCommentsById(article.id)
    }

    componentDidUpdate() {
        this.size = this.container.getBoundingClientRect()
    }

    render() {
        const {isOpen, toggleOpen} = this.props

        return (
            <div ref={this.getContainerRef}>
                <a href="#" onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getContainerRef = (ref) => {
        this.container = ref
        if (ref) {
            this.size = ref.getBoundingClientRect()
        }
    }

    getBody() {
        const {article, isOpen} = this.props

        if (!isOpen) return null

        if(article.commentsLoadedError) {
            return <h2>{article.commentsLoadedError}</h2>
        }

        if (article.commentsLoading || !article.commentsLoaded) {
            return <Loader />
        }

        

        if (!article.comments || !article.comments.length) {
            return <div>
                <h3>
                    No comments yet
                </h3>
                <NewCommentForm articleId={article.id} />
            </div>
        }

        const commentItems = article.comments.map(id => <li key={id}><Comment id={id} /></li>)

        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
                <NewCommentForm articleId={article.id} />
            </div>
        )
    }
}

export default connect(null, { loadCommentsById })(toggleOpen(CommentList))