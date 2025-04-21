import React from "react";

class Message extends React.Component {
  state = { currLikes: 700 };
  IncrementLikes() {
    console.log("IncrementLikes");
    // this.props.messageDetails.likes++; // props are readonly
    // this.state.currLikes++; // state is immutable
    this.setState({ currLikes: this.state.currLikes + 1 });
  }
  render() {
    return (
      <div
        style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
      >
        <img
          src={this.props.messageDetails.imageUrl}
          alt=""
          height={"100px"}
          width={"150px"}
        />
        <h2>{this.props.messageDetails.msg}</h2>
        <p>From : {this.props.messageDetails.from}</p>
        <p>To : {this.props.messageDetails.to}</p>
        <button onClick={() => this.IncrementLikes()}>
          {" "}
          {this.state.currLikes} Likes
          {/* {this.props.messageDetails.likes} */}
        </button>
      </div>
    );
  }
}
export default Message;
