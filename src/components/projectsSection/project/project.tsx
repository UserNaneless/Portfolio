import { Component } from 'react'

import "./project.css";
import SkillCaption from '../../skillsSection/skillCaption/skillCaption';

import { FaGithub } from "react-icons/fa6"

type ProjectProps = {
    img: string,
    title: string,
    stack: string[],
    mainText: string,
    githubLink: string
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
                        <SkillCaption title={item} key={i}/>
                    )}
                </div>
                <div className="projectText">{this.props.mainText}</div>

                <button className="buttonMain"> <a href={this.props.githubLink}><FaGithub/> <span>GitHub</span></a> </button>
            </div>
        )
    }
}
