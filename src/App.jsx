import React, { useState } from "react";
import "./App.css";
const App = () => {
  const leftBtn = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "="];
  const rightBtn = ["C", "/", "-", "+", "*"];
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const clickHandler = (value) => {
    if (value !== "=" && value !== "C") {
      setInput((prev) => prev + value);
    } else {
      if (value === "=") {
        const res = eval(input);
        setResult(eval(res));
        setInput(res);
      } else {
        setInput("");
        setResult("")
      }
    }
  };
  return (
    <div className="app">
      <div className="container">
        <div className="left">
          <div className="result">
            <input type="text" readOnly value={input} />
          </div>
          <div className="left_btns">
            {leftBtn.map((btn) => (
              <button key={btn} onClick={() => clickHandler(btn)}>
                {btn}
              </button>
            ))}
          </div>
        </div>

        <div className="right">
          {rightBtn.map((btn) => (
            <button key={btn} onClick={() => clickHandler(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
