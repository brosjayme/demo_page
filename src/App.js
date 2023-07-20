import React from "react";
import Form from "./Form";
function App() {
  function handleClick() {
    console.log("button clicked");
  }
  function handleSubmit(e) {
    console.log("Form submitted");
  }

  return (
    <>
      <div className="App">
        <button onClick={handleClick}>do something</button>
        <Form onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default App;
