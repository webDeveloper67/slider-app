import React, { Component } from "react";
import Review from "./components/Review";
import people from "./data";

class App extends Component {
  render() {
    return (
      <div>
        <Review people={people} />
      </div>
    );
  }
}

export default App;
