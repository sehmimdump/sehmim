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
import { jobs } from "../../util/ExperienceData"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  WrapperMain: {
    display: 'flex',
    flexDirection: 'column',
  },
  autoPlayClass: {
    width: '100%',
    overflowWrap: 'break-word',
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
  },
  mobileStepper: {
    marginTop: '2vh',
    boxShadow:
      `0px 2px 4px -1px rgba(0,0,0,0.2), 
      0px 4px 5px 0px rgba(0,0,0,0.14), 
      0px 1px 10px 0px rgba(0,0,0,0.12)`
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
            interval={15000}
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
                                <img id="stack-img" className="stack-img" src={stackImg}></img>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>


                    <div className='project-right'>
                      <img className='project-right-img' src={step.rightImg}></img>
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