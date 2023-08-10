import { Component } from 'react'

import "./project.css";
import SkillCaption from '../../skillsSection/skillCaption/skillCaption';

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6"

type ProjectProps = {
    img: string,
    title: string,
    stack: string[],
    mainText: string,
    githubLink: string
    liveLink?: string
}

export default class Project extends Component<ProjectProps> {
    render() {
        return (
            <div className="projectMain">
                <img className="projectPreview"
                    src={this.props.img} alt="" />
                <h3 className="projectTitle">{this.props.title}</h3>
                <div className="projectStack">
                    {this.props.stack?.map((item, i) =>
                        <SkillCaption title={item} key={i} />
                    )}
                </div>
                <div className="projectText">{this.props.mainText}</div>

                <div className="buttons">
                    <button className="buttonMain"> <a href={this.props.githubLink}><FaGithub /> <span>GitHub</span></a> </button>
                    <button className="buttonMain"> <a href={this.props.liveLink} target='_blank'><FaArrowUpRightFromSquare/> <span>Live</span></a> </button>
                </div>

            </div>
        )
    }
}
