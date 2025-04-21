import "./App.css";
import React from "react";
import Message from "./Message";

class App extends React.Component {
  render() {
    let msgOne = { msg: "Hey !", from: "John", to: "Carter" };
    // let msgTwo = { msg: "Hello !", from: "Peter", to: "Parker" };
    // let msgThree = { msg: "Bye !", from: "Mick", to: "Harington" };
    return (
      <div style={{ margin: "20px" }}>
        <Message messageDetails={msgOne} />
      </div>
    );
  }
}

export function Add(a, b) {
  return a + b;
}
export function Subtract(a, b) {
  return a - b;
}

export default App;
