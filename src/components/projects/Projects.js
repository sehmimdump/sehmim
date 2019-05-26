import React, { Component } from 'react';


import ProjectEach from "./ProjectEach";

import '../../styles/projects.sass'

export default class projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...projects
        }
    }
    render() {
        const projects = [
            {
                name: 'This Website',
                img: 'https://i.imgur.com/K3PmqZ3.png',
                detail: 'Well, It is what you see',
                live: 'http://haque-sehmim.surge.sh',
                github: 'https://github.com/sehmim/sehmim'
            },
            {
                name: 'Hotdog Stand',
                img: 'https://i.imgur.com/glutDQe.png',
                detail: 'Front End e-commerce site made in React and SASS',
                live: 'http://hotdog-stand.surge.sh',
                github: 'https://github.com/sehmim/hotdog-stand'
            },
            {
                name: 'Organicon',
                img: 'https://i.imgur.com/DzXu5AZ.png',
                detail: 'Add groceries as a buyer and a verdor.',
                live: 'http://groceryman.surge.sh/',
                github: 'https://github.com/sehmim/grocery-man'
            },
            {
                name: 'Spectral Lights',
                img: 'https://i.imgur.com/MFjXvUY.png',
                detail: 'My band-page that I created with React.js',
                live: 'https://spectrallights.herokuapp.com/',
                github: 'https://github.com/sehmim/BandPage-SpectralLights'
            }
        ]
        return (
            <div className="projects-main">
                {
                    projects.map(item => {
                        return (
                            <ProjectEach proj={item} />
                        )
                    })
                }
            </div>
        );
    }
}


