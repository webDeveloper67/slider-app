import React, { Component } from "react";
import Review from "./components/Review";
import people from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideInx: 0,
    };
  }

  nextPerson = () => {
    this.setState({ slideInx: this.state.slideInx + 1 });
    if (this.state.slideInx >= people.length - 1) {
      this.setState({ slideInx: 0 });
    }
  };

  prevPerson = () => {
    this.setState({ slideInx: this.state.slideInx - 1 });
    if (this.state.slideInx <= 0) {
      this.setState({ slideInx: people.length - 1 });
    }
  };

  randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);

    // if (randomNum === this.state.slideInx) {
    //   randomNum = this.state.slideInx + 1;
    // }
    this.setState({ slideInx: randomNum });
  };

  render() {
    return (
      <div data-test="component-app">
        <Review
          people={people}
          slideInx={this.state.slideInx}
          nextPerson={this.nextPerson}
          prevPerson={this.prevPerson}
          randomPerson={this.randomPerson}
        />
      </div>
    );
  }
}

export default App;
