import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    (async () => {
      const result = await axios.get("/api/jokes");
      console.log(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Jokes App</h1>
    </div>
  );
}

export default App;
