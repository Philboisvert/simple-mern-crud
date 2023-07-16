import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import React from "react";
import "../assets/App.css";

const bingo = "hello"

export default function Header() {
    return (
        <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      </div>
    );
}

  