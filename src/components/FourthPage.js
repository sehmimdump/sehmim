import React, { Component } from 'react';

import MusicProjects from "./projects/MusicProjects";

import "../styles/fourthpage.sass";

export default class FourthPage extends Component {
    render() {
        return (
            <div className="FourthPage-main" >
                <br></br>
                <hr></hr>
                <h1 className="main"> Music n Stuff </h1>
                <br></br>
                <hr></hr>

                <div className='music-box'>
                    <MusicProjects />
                </div>
            </div>
        );
    }
}



