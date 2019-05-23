import React, { Component } from 'react';
import './App.sass';
import LandingPage from "./components/landingPage";
import SecondPage from "./components/secondPage";
import ThirdPage from "./components/ThirdPage";
class App extends Component {

  render() {

    return (
      <div className="App">
        <LandingPage dataFromLand={this.changingState} />
        <SecondPage />
        <ThirdPage />
      </div>
    );
  }
}

export default App;
