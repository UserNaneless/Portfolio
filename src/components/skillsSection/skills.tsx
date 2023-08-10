import { Component } from 'react'
import SkillCaption from './skillCaption/skillCaption'

import "./skills.css"

export default class Skills extends Component {
    render() {
        return (
            <section className="skillsMain">
                <h2>Skills</h2>

                <div className="skillsContainer">
                    <div className="skillsTypes">
                        <h3>Front-End:</h3>
                        <div className="skills">
                            {["HTML", "JavaScript", "TypeScript", "React", "Prisma", "Next"].map((item, i) => {
                                return <SkillCaption title={item} key={i} />
                            })}
                        </div>
                    </div>

                    <div className="skillsTypes">
                        <h3>Styling:</h3>
                        <div className="skills">
                            {["CSS", "SASS", "BootStrap", "Tailwind", "Material UI"].map((item, i) => {
                                return <SkillCaption title={item} key={i} />
                            })}
                        </div>
                    </div>

                    <div className="skillsTypes">
                        <h3>Miscellaneous:</h3>
                        <div className="skills">
                            {["Git", "REST APIs", "Docker", "OOP Paradigm"].map((item, i) => {
                                return <SkillCaption title={item} key={i} />
                            })}
                        </div>
                    </div>

                    <div className="skillsTypes">
                        <h3>Other skills:</h3>
                        <div className="skills">
                            {["NodeJS", "Express", "C++", "RayLib", "Python", "Qt 6 / PyQt 6",].map((item, i) => {
                                return <SkillCaption title={item} key={i} />
                            })}
                        </div>
                    </div>
                </div>


            </section>
        )
    }
}
