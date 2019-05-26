import React, { Component } from 'react';
import "../styles/secondPage.sass";
import "../styles/third-page.sass";
import "../styles/media_Queries/tv.sass";

// components
import Projects from "./projects/Projects";

export default class ThirdPage extends Component {
    render() {
        return (
            <div className="ThirdPage-main" >
                <h1 id="projects" className="ThirdPage-main-header"> PROJECTS </h1>
                <Projects />
            </div>
        );
    }
}



