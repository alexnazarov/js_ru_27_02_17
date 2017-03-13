import React, { Component } from 'react';
import './style.css'

class AddComment extends Component {
    state = {
        name: '',
        message: ''
    }

    render() {
        const maxNameLength = 10;
        const maxMesaageLength = 150;

        const {name, message} = this.state;

        return (
            <form className="add-comment-form">
                <h3>Add New Comment</h3>
                <div className="form-row">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={name} onChange={this.validate({
                        field: 'name',
                        max: maxNameLength
                    })} />
                    {maxNameLength - name.length}
                </div>
                <div className="form-row">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" cols="30" rows="10" value={message} onChange={this.validate({
                        field: 'message',
                        max: 150
                    })}></textarea>
                    {maxMesaageLength - message.length}
                </div>
                <div className="form-row">
                    <input type="submit" value="Send" onClick={this.addComment} disabled={!name || !message} />
                </div>
            </form>
        );
    }

    //хорошо, только название не удачное
    validate = data => ev =>  {
        const { field, max } = data;
        const text = ev.target.value;

        if(text.length > max) return;

        this.setState({
            [field]: text
        })
    }
    
    addComment = ev => {
        ev.preventDefault();

        alert(`Name - ${this.state.name}; Message - ${this.state.message}`);
    }
}

export default AddComment;
