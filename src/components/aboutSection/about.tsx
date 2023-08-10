import { Component } from 'react'

import "./about.css"

export default class About extends Component {

    render() {
        return (
            <section className="aboutMain">
                <h2>about me</h2>
                <div className="aboutItems">
                    <div className="aboutItem">
                        <h3>past</h3>
                        <div className="aboutItemText">
                            I started programming when i was 15. I was browsing youtube and a video with a title that goes something like "How to create your first site" catches my eye. That video is the beggining of my journey to programming world.
                         </div>
                    </div>

                    <div className="aboutItem">
                        <h3>present</h3>
                        <div className="aboutItemText">Currently i'm a MIPT student pursuing my dream of becoming a professional programmer. I'm creating games with C++ and RayLib, building WebSites with React, creating programs with Python and PyQt6. </div>
                    </div>

                    <div className="aboutItem">
                        <h3>future</h3>
                        <div className="aboutItemText">In the future i'm looking forward to endless possibilities that programming world can give to us. I'm fully convinced, that with my passions, my future and present skills i will be able to contribute to the IT world.</div>
                    </div>
                </div>
            </section>
        )
    }
}
