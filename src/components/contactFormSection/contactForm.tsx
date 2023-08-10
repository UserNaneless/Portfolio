import { Component } from 'react'

import "./contactForm.css"

export default class ContactForm extends Component {
    render() {
        return (
            <div className="contactFormMain">
                <h2>Contact Me</h2>
                <form className="contactForm">
                    <input type="email" placeholder="Your email" className="inputMain"/>
                    <input type="text" placeholder="Your name" className="inputMain"/>
                    <textarea className="inputMain"/>
                    <button className="buttonMain">Send</button>
                </form>
            </div>
        )
    }
}
