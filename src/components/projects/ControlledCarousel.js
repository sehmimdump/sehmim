import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// styleClass
import '../../styles/media_Queries/tv.sass';
import '../../styles/projects-card.sass'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const jobs = [
  {
    jobTitle: 'Software Engineer',
    jobCompany: 'Scotiabank Toronto',
    jobDates: 'Jan 2019 - April 2019',
    jobDuty: [
      'Developed a Chatbot for Equity Traders which closed the gap between traders and clients by 90% resulting an increase in sales',
      'Increased accuracy of intents by integrating latest machine learning Natural Language Processing libraries such as NodeNLP and spaCy',
      'Increased performance and code readability by 70% by re-designing and refactoring entire back-end'
    ],
    techStack: [
      'https://avatars1.githubusercontent.com/u/36300238',
      'https://banner2.kisspng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg',
      'https://www.docker.com/sites/default/files/social/docker_facebook_share.png',
      'https://camo.githubusercontent.com/af4bf83ab2ca125346740f9961345a24ec43b3a9/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/SpaCy_logo.svg/800px-SpaCy_logo.svg.png',
    ]
  }]

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    backgroundColor: theme.palette.background.default,
    justifyContent: 'center',
    paddingTop: '5px',
    paddingBottom: '5px',

  },
  headerText: {
    fontSize: '2rem',
    fontWeight: '100',
  },
  headerBottom: {
    display: 'flex',
    justifyContent: 'center',
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = jobs.length;

    return (
      <div className={classes.root}>
        <div className={classes.WrapperMain}>

          <AutoPlaySwipeableViews
            className={classes.autoPlayClass}
            interval={10000}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
          >
            {jobs.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (

                  <div className='project-wrapper' >

                    <div className='project-left'>
                      <div className='header-wrapper'>
                        <h1 className='job-title'>{step.jobTitle}</h1>
                        <h2 className='job-dates'> {step.jobDates} </h2>
                      </div>
                      <h3 className='job-company'> {step.jobCompany} </h3>
                      <ul className='job-duties'>
                        {
                          step.jobDuty.map(item => {
                            return (
                              <li className='job-duties-each'>
                                {item}
                              </li>
                            )
                          })
                        }
                      </ul>
                      <ul className="stack-group">
                        {
                          step.techStack.map(stackImg => {
                            return (
                              <li className="stack-group-each">
                                <img className="stack-img" src={stackImg}></img>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>


                    <div className='project-right'>
                      <img className='project-right-img' src="https://cdn-images-1.medium.com/max/1600/1*BWZp1CB1u7QE1CAr6eewrA.jpeg"></img>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}

          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
            </Button>
            }
          />
        </div>
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);