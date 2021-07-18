import React, { Component } from 'react';
import { Button, Card, TextField } from '@material-ui/core';
import { AccessAlarm } from '@material-ui/icons';

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

    onMessageChange(event) {
        this.setState({ message: event.target.value })
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
                        <form className="contact-form" autoComplete="off">
                            <TextField id="outlined-basic" required fullWidth label="Email" variant="outlined" margin="normal" />
                            <TextField id="outlined-basic" required fullWidth label="Name" variant="outlined" margin="normal" />
                            <TextField
                                id="outlined-multiline-static"
                                required
                                fullWidth
                                label="Message"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
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