// function HelloFunctional() {
//   return (
//     <div>
//       <h1>Hello Functional Component</h1>
//     </div>
//   );
// }

const HelloFunctional = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

// const HelloFunctional = function () {
//   return (
//     <div>
//       <h1>Hello Functional Component</h1>
//     </div>
//   );
// };

export default HelloFunctional;
