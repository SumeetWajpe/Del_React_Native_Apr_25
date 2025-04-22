import "./App.css";
import React from "react";
import Message from "./Message";

class App extends React.Component {
  state = {
    msgs: [
      {
        msg: "Hey !",
        from: "John",
        to: "Carter",
        likes: 100,
        imageUrl:
          "https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/65963c6a-a64d-44ba-bef1-0d15bc5f25dc/Hello201x1.png",
      },
      {
        msg: "Hello !",
        from: "Peter",
        to: "Parker",
        likes: 200,
        imageUrl:
          "https://www.shutterstock.com/image-vector/hey-text-speech-bubble-hi-260nw-2328471449.jpg",
      },
      {
        msg: "Bye !",
        from: "Mick",
        likes: 300,
        to: "Harington",
        imageUrl:
          "https://www.shutterstock.com/shutterstock/photos/2169913371/display_1500/stock-vector-bye-speech-bubble-goodbye-text-hand-drawn-quote-bye-icon-lettering-doodle-phrase-speech-bubble-2169913371.jpg",
      },
    ],
  };

  DeleteAMessage() {
    console.log("Deleting a message");
  }

  render() {
    return (
      <div className="row">
        {this.state.msgs.map(msg => {
          return (
            <Message
              messageDetails={msg}
              DeleteAMessage={() => this.DeleteAMessage()}
            />
          );
        })}

        {/* {msgs.length > 0 ? (
          <h2>{msgs.length} messages </h2>
        ) : (
          <h2>No Messages</h2>
        )} */}
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
