import React, { Component } from 'react';

import './Contact.scss';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    render() {
        return (
            <div className="contact">
                <div className="left-side">
    
                </div>
                <div className="right-side">
                    <input placeholder="name" type="text"></input>
                    <input placeholder="email" type="text"></input>
                    <div className="form-group">
                        <textarea placeholder="message" className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;