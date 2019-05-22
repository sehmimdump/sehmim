import React, { Component } from 'react';
import "../styles/secondPage.sass";
import "../styles/media_Queries/tv.sass";
import MusicProjects from './projects/MusicProjects';
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
            <div className="SecondPage-main" id="projects">
                <div className="SecondPage-Body">
                    <div className="projects">

                    </div>
                </div>
            </div>
        );
    }
}



