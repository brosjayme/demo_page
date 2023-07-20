import React from "react";
function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log("button clicked");
  }
  return (
    <div className="App">
      <button onClick={handleClick}>do something</button>

      <form onSubmit={handleClick}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
