import React, { Component } from 'react';
import '../App.sass';
import '../styles/landingpage.sass';
import '../styles/hamburger.sass';
import '../styles/media_Queries/tv.sass';

import AnchorLink from 'react-anchor-link-smooth-scroll'
import Hamburger from "./Hamburger";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';


const socialData = [
  { title: 'linkedin', href: 'https://www.linkedin.com/in/sehmim-haque/', src: 'https://grytics.com/wp-content/uploads/2015/01/1414386638_linkedin_circle_color-512.png' },
  { title: 'github', href: 'https://github.com/sehmim', src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  { title: 'stackoverflow', href: "https://www.visualcv.com/sehmim-haque/", src: "https://webstockreview.net/images/resume-clipart-big-19.png" },
]
class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height
    this.setState({
      scrolled: scrolled
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="landingpage">
        {/* APPBAR */}
        <AppBar color="secondary"
          className={this.state.scrolled >= .3 ?
            `${classes.appbar} ${classes.appbar2}` : `${classes.appbar}`}
        >
        </AppBar>
        {/* NAME */}
        <div className="header-div" >
          <h1 className="header-main" >
            Sehmim Al
            </h1>
        </div>
        {/* IMAGE */}
        <div className="circle-div">
          <img src="https://i.imgur.com/8zzmf4y.jpg" className="circle"></img>
        </div>

        <div className="qualities">
          ♦<AnchorLink offset='80' className="qualities-each" href="#projects" >
            ♦ Web Developer ♦
          </AnchorLink>
          <AnchorLink offset='80' className="qualities-each" href="#music" >
            ♦ Artsy Guy ♦
          </AnchorLink>
          <AnchorLink offset='80' className="qualities-each" href="#music" >
            ♦ Musician ♦
          </AnchorLink>
          ♦</div>

        <div className="qualities-sub">Please, do have a look around</div>
        <div className="who" >
          {/* THREE */}
          <div className="links" >
            {
              socialData.map((item, index) => {
                return (
                  <a key={index} href={item.href} >
                    <img className="links-items" src={item.src} ></img>
                  </a>
                )
              })
            }
          </div>
        </div>


        <Hamburger />
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
    height: '5vh',
    opacity: '0',
    color: '#194866',
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease-in-out',
    boxShadow: 'none'
  },
  appbar2: {
    height: '5vh',
    opacity: '1',
    backgroundColor: 'white',
    color: '#fff',
    boxShadow:
      `0px 2px 4px -1px rgba(0,0,0,0.2), 
      0px 4px 5px 0px rgba(0,0,0,0.14), 
      0px 1px 10px 0px rgba(0,0,0,0.12)`

  },
};


export default withStyles(styles)(LandingPage);

