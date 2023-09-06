import React from "react";
import ReactDOM from "react-dom/client"; //ReactDOM: for web & React Native: for native apps

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

function App() {
  const name = "Brian"
  const age = 23

  return (
    <>
      <h1>Hello World!</h1>
      <p>My name is {name} ({age} years old)</p>
    </>
  );
}

root.render(<App />);
