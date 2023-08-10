import { Component } from 'react'

import "./header.css"

export default class Header extends Component {
    menuScrollTo = (destination: string) => {
        document.getElementsByClassName("appMain")[0].scrollTo({
            top: document.getElementsByClassName(destination)[0].getBoundingClientRect().top,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <nav className="headerMain">
                <div className="headerItem" onClick={() => {
                    this.menuScrollTo("homeMain");
                }}>Home</div>
                <div className="headerItem" onClick={() => {
                    this.menuScrollTo("aboutMain");
                }}>About</div>

                <div className="headerItem" onClick={() => {
                    this.menuScrollTo("skillsMain");
                }}>Skills</div>

                <div className="headerItem" onClick={() => {
                    this.menuScrollTo("projectsMain");
                }}>Projects</div>
                <div className="headerItem" onClick={() => {
                    this.menuScrollTo("contactFormMain");
                }}>Contact me</div>
            </nav>
        )
    }
}
