import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            padding: 0,
          }}
          src="/construction.png"
          className="logo"
          alt="Vite logo"
        />
      </div>
    </div>
  );
}

export default App;
