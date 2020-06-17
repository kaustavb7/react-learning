import React from "react";
import "./App.css";

function HandleId() {
  return <h1>Hello</h1>;
}
const a = 6;
function App() {
  return (
    <div>
      <HandleId>{a}</HandleId>
    </div>
  );
}

export default App;
