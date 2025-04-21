import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.messageDetails.msg}</h2>
        <p>From : {this.props.messageDetails.from}</p>
        <p>To : {this.props.messageDetails.to}</p>
      </div>
    );
  }
}
export default Message;
