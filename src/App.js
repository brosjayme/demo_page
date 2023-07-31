import React from "react";
import Jokes from "./Jokes";
// import Form from "./Form";
function App() {
  // function handleClick() {
  //   console.log("button clicked");
  // }
  // function handleSubmit() {
  //   console.log("Form submitted");

  const dadJoke2 = "I used to be a banker but i lost interest.";

  return (
    <>
      <h1>Dad Joke</h1>
      <Jokes />
      <Jokes />
      {/* <div className="App"> */}
      {/* <button onClick={handleClick}>do something</button>
        <Form onSubmit={handleSubmit} /> */}
      {/* </div>  */}
    </>
  );
}

export default App;
