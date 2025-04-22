import React, { useState } from "react";

// class Message extends React.Component {
//   state = { currLikes: this.props.messageDetails.likes };
//   IncrementLikes() {
//     console.log("IncrementLikes");
//     // this.props.messageDetails.likes++; // props are readonly
//     // this.state.currLikes++; // state is immutable
//     this.setState({ currLikes: this.state.currLikes + 1 });
//   }
//   render() {

//     return (
//       <div className="col-md-3">
//         <div className="card">
//           <img
//             src={this.props.messageDetails.imageUrl}
//             className="card-img-top"
//             alt="..."
//             height={200}
//           />
//           <div className="card-body">
//             <h5 className="card-title">{this.props.messageDetails.msg}</h5>
//             <p className="card-text">From : {this.props.messageDetails.from}</p>
//             <p className="card-text">To : {this.props.messageDetails.to}</p>
//             <button
//               className="btn btn-primary"
//               onClick={() => this.IncrementLikes()}
//             >
//               {this.state.currLikes} Likes
//               {/* {this.props.messageDetails.likes} */}
//             </button>
//             <button
//               className="btn btn-danger mx-2"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Message;

const Message = props => {
  const [currLikes, setCurrLikes] = useState(props.messageDetails.likes);
  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src={props.messageDetails.imageUrl}
          className="card-img-top"
          alt="..."
          height={200}
        />
        <div className="card-body">
          <h5 className="card-title">{props.messageDetails.msg}</h5>
          <p className="card-text">From : {props.messageDetails.from}</p>
          <p className="card-text">To : {props.messageDetails.to}</p>
          <button
            className="btn btn-primary"
            onClick={() => setCurrLikes(currLikes + 1)}
          >
            {currLikes} Likes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
