import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

let wHeight = window.innerHeight;

var regex = /[+-]?\d+(\.\d+)?/g;

let directionH = 0;
let directionV = 0;
let size = 0;

function App() {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 6);

  function Move() {
    let bubble = document.getElementById("bubble1");
    let bubbleV = document.getElementById("bubbleV");

    var moveV = bubble.style.top.match(regex).map(function (v) {
      return parseFloat(v);
    });
    var moveH = bubble.style.left.match(regex).map(function (v) {
      return parseFloat(v);
    });

    let randomV = randomIntFromInterval(0, 1000);
    if (randomV > 999) {
      directionV === 0 ? (directionV = 1) : (directionV = 0);
    }

    let randomH = randomIntFromInterval(0, 1000);
    if (randomH > 999) {
      console.log(
        "🚀 ~ file: App.jsx:37 ~ Move ~ andomIntFromInterval(0, 10):",
        randomH
      );
      directionH === 0 ? (directionH = 1) : (directionH = 0);
    }

    if (moveH[0] > window.innerWidth - bubbleV.height - 10) {
      directionV = 1;
    } else if (moveH[0] < 0) {
      directionV = 0;
    }

    if (directionV === 1) {
      bubble.style.left = moveH[0] - 1 + "px";
    } else {
      bubble.style.left = moveH[0] + 1 + "px";
    }

    if (moveV[0] > window.innerHeight - bubbleV.height - 10) {
      directionH = 1;
    } else if (moveV[0] < 0) {
      directionH = 0;
    }

    if (directionH === 1) {
      bubble.style.top = moveV[0] - 1 + "px";
    } else {
      bubble.style.top = moveV[0] + 1 + "px";
    }

    if (bubbleV.height > window.innerHeight / 2) {
      size = 1;
    } else if (bubbleV.height < window.innerHeight / 10) {
      size = 0;
    }

    if (size === 0) {
      bubbleV.height = bubbleV.height + 1;
    } else {
      bubbleV.height = bubbleV.height - 1;
    }

    setTimeout(function () {
      Move();
    }, 20);
  }

  setTimeout(function () {
    Move();
  }, 100);

  return (
    <div className="App">
      <div
        id="bubble1"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          // maxHeight: "100px !important",
        }}
      >
        <video
          id="bubbleV"
          className="video-container video-container-overlay"
          autoPlay={true}
          loop={true}
          muted={true}
          data-reactid=".0.1.0.0"
          // controls
          height={wHeight / 8}
        >
          <source
            type="video/mp4"
            data-reactid=".0.1.0.0.0"
            src="bubbleSt2.mp4"
          />
        </video>
      </div>

      <img
        style={{
          position: "absolute",
          top: window.innerHeight / 4,
          left: window.innerWidth / 2 - window.innerHeight / 4,
          // width: "100vw",
          height: "40vh",
          padding: 0,
        }}
        src="/underC.png"
        className="logo"
        alt="Vite logo"
      />
    </div>
  );
}

export default App;
