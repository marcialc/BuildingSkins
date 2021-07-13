import React from 'react';

import './Contact.scss';

const Contact = () => {

    return (
        <div className="contact">
            <div className="left-side">

            </div>
            <div className="right-side">
                <input placeholder="name" type="text"></input>
                <input placeholder="email" type="text"></input>
                <input id="message" placeholder="message" type="text"></input>
            </div>
        </div>
    )
}

export default Contact;