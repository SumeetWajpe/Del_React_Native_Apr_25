import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Counter from "./functional/counter";
// import App, { Add } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
