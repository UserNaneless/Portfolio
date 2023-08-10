import { Component } from 'react'

import "./projectsSection.css"
import Project from './project/project'

export default class Projects extends Component {
    render() {
        return (
            <section className="projectsMain">
                <h2>Projects</h2>
                <div className="projects">
                    <Project {...{
                        img: "site1.png",
                        title: "Vision Agency",
                        stack: ["HTML", "React", "CSS",],
                        mainText: "Landing page with animations for the Vision Agency",
                        githubLink: "https://github.com/UserNaneless/VisionLanding",
                        liveLink: "https://vision-landing.vercel.app/"
                    }} />

                    <Project {...{
                        img: "site2.jpg",
                        title: "Weather App",
                        stack: ["HTML", "React", "CSS", "REST API"],
                        mainText: "Weather App to practice using REST API. Your can fetch any weather by city name",
                        githubLink: "https://github.com/UserNaneless/WeatherApi",
                        liveLink: "https://weather-api-rho-one.vercel.app/"
                    }} />

                    <Project {...{
                        img: "site4.jpg",
                        title: "Music Visualizer / Player with playlist",
                        stack: ["HTML", "React", "CSS", "REST API", "Next", "Web Audio API", "NodeJS", "Express"],
                        mainText: "Audio Visualizer working on NodeJS server. To play something write in playlist/video link from youtube and click on blue background. Fully functional playlist: queue clearing, looping, shuffling, drag and drop.",
                        githubLink: "https://github.com/UserNaneless/Visualizer",
                        liveLink: "https://visualizer-eight.vercel.app/"
                    }} />

                    <Project {...{
                        img: "site5.png",
                        title: "Online Gaming/Streaming Platform Cyborg",
                        stack: ["HTML", "React", "CSS", "React-Router-Dom", "Prisma"],
                        mainText: "Cyberg is an online gaming shop with streaming capabilities. Profile, game details, top games, top streamers: everything you need is here! ",
                        githubLink: "https://github.com/UserNaneless/CyborgShop",
                        liveLink: "https://cyborg-shop.vercel.app/"
                    }} />

                    <Project {...{
                        img: "site1.png",
                        title: "Tutoring Site",
                        stack: ["HTML", "React", "CSS", "Next", "Prisma", "Next-Auth"],
                        mainText: "Simple tutoring site for my needs. There is a live lesson room, homework room, profile room. Live-Lesson room - is live tutoring with a drawing board. Homework room - you have a set of tasks to do, solutions can be pended as LaTeX/photo. Profile - your statistics.",
                        githubLink: "https://github.com/UserNaneless/Portfolio"
                    }} />

                </div>

            </section>
        )
    }
}
