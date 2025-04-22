import React from "react";

class Message extends React.Component {
  render() {
    // console.log("Within Render of Message !");
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            src={this.props.messageDetails.imageUrl}
            className="card-img-top"
            alt="..."
            height={200}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.messageDetails.msg}</h5>
            <p className="card-text">From : {this.props.messageDetails.from}</p>
            <p className="card-text">To : {this.props.messageDetails.to}</p>
            <button className="btn btn-primary">
              {this.props.messageDetails.likes} Likes
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Message;
