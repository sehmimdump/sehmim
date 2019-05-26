import React, { Component } from 'react';
import './App.sass';
import LandingPage from "./components/landingPage";
import SecondPage from "./components/secondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";

class App extends Component {

  render() {

    return (
      <div className="App">
        <LandingPage dataFromLand={this.changingState} />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
      </div>
    );
  }
}

export default App;
