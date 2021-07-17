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
            <div></div>
        )
    }
}

export default Contact;