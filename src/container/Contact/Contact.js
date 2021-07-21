import React, { Component } from 'react';
import { Button, Card, TextField } from '@material-ui/core';
import { AccessAlarm } from '@material-ui/icons';
import Axios from 'axios';

import './Contact.scss';

const ContactInfoItem = ({icon, text}) => {
    return (
        <div className="contact-info-item">
            <AccessAlarm className="contact-item-icon"></AccessAlarm>
            <label>{text}</label>
        </div>
    )
}

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });

        // To run it locally
        //Axios.post('http://localhost:5000/api/email', this.state)

        //run it online 
        // Axios.post('https://skillcourt-email.herokuapp.com/api/email', this.state)

        Axios.post('http://localhost:8080/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }

    render() {
        return (
            <div className="contact-page-container">
                <div className="contact-left-side">
                    <div className="contact-us">
                        <h2 className="contact-us-title">CONTACT US</h2>
                    </div>
                    <div className="contact-divider"></div>
                    <div className="contact-info">
                        <ContactInfoItem icon="star" text="3054699001"></ContactInfoItem>
                        <ContactInfoItem icon="star" text="Email@email.com"></ContactInfoItem>
                        <ContactInfoItem icon="star" text="buildingskins.com"></ContactInfoItem>
                    </div>
                </div>
                <div className="contact-right-side">
                    <Card variant="outlined" className="contact-card">
                        <form onSubmit={this.handleSubmit} className="contact-form" autoComplete="off">
                            <TextField onChange={this.handleChange} name="email" id="outlined-basic" required fullWidth label="Email" variant="outlined" margin="normal" />
                            <TextField onChange={this.handleChange} name="name" id="outlined-basic" required fullWidth label="Name" variant="outlined" margin="normal" />
                            <TextField
                                onChange={this.handleChange}
                                name="message"
                                id="outlined-multiline-static"
                                required
                                fullWidth
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                                margin="normal"
                            />
                            <Button className="contact-submit-button" type="submit" variant="contained" color="primary">Send</Button>
                        </form>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Contact;