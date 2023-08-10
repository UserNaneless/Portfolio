import { Component } from 'react'

import "./home.css"

export default class Home extends Component {
    render() {
        return (
            <section className="homeMain">
                <h1 className="homeTitle">Hello! I am Sergey</h1>
                <div className="homeText">
                    I am a passionate Junior Front-End developer living in Russia, currently studuing at MIPT. <br />
                    I'm commited to learning to create visual appealing and user-friendly websites.
                </div>
                <button className="buttonMain" onClick={() => {
                    document.getElementsByClassName("appMain")[0].scrollTo({
                        top: document.getElementsByClassName("aboutMain")[0].getBoundingClientRect().top,
                        behavior: "smooth"
                    })
                }}>Continue</button>
            </section>
        )
    }
}
