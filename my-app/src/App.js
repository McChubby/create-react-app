import React from "react";
import "./App.css";
import FunctionalCool from "./Components/Functional/FunctionalCool";
import ClassCool from "./Components/Classes/ClassCool";

class App extends React.Component {
  render() {
    return (
      <div>
        <FunctionalCool />
        <ClassCool />
      </div>
    );
  }
}

export default App;
