import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../AC'

class NewCommentForm extends Component {
    static propTypes = {
    }

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        const {value} = ev.target
        if (!validators[field](value)) return

        this.setState({
            [field]: value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()

        const { addComment } = this.props;
        const { textValue, userValue } = this.refs;

        const text = textValue.value;
        const user = userValue.value;

        addComment(text, user);
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input ref="textValue" type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input ref="userValue" type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

const validators = {
    text: (text) => text.length < 150,
    user: (text) => text.length < 10
}

export default connect(null, { addComment })(NewCommentForm)