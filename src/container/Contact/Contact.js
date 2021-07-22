import React, { Component } from 'react';
import { Button, Card, TextField } from '@material-ui/core';
import { AccessAlarm } from '@material-ui/icons';
import emailjs from 'emailjs-com';

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

    sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_b2lr9hc', 'building-skins-template', e.target, 'user_6MAns5L6mQSlH73j45VIu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    render() {
        return (
            <div id="contact" className="contact-page-container">
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
                        <form className="contact-form" autoComplete="off" onSubmit={this.sendEmail}>
                            <TextField id="outlined-basic" required fullWidth name="email" label="Email" variant="outlined" margin="normal" />
                            <TextField id="outlined-basic" required fullWidth name="full_name" label="Full name" variant="outlined" margin="normal" />
                            <TextField
                                id="outlined-multiline-static"
                                name="message"
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