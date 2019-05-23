import React, { Component } from 'react';
import "../styles/secondPage.sass";
import "../styles/media_Queries/tv.sass";

import ControlledCarousel from "./projects/ControlledCarousel";
// import MusicProjects from './projects/MusicProjects';
// import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";

export default class SecondPage extends Component {
    state = {
        catagoryID: '',
        title: 'Projects'
    }

    foo = (data, title) => {
        this.setState({
            catagoryID: data,
        })
    }

    render() {
        const navData = []


        return (
            <div className="SecondPage-main" id="experience">
                <h1 className="SecondPage-main-header"> EXPERIENCE </h1>
                <div className="SecondPage-Body">
                    <ControlledCarousel />
                </div>
            </div>
        );
    }
}



