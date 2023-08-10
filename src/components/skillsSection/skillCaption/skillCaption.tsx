import { Component } from 'react'

import "./skillCaption.css"

type SkillCaptionProps = {
    title: string
}

export default class SkillCaption extends Component<SkillCaptionProps> {
    render() {
        return (
            <div className="skillCaptionMain">
                {this.props.title}
            </div>
        )
    }
}
