import React, { useState } from "react";
import './App.css';


const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);

  const handleClick = (value) => {
    if (display === "0" || display === "Error") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
    setIsOperatorClicked(false);
  };

  const handleClear = () => {
    setDisplay("0");
    setIsOperatorClicked(false);
  };

  const handleEquals = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
      setIsOperatorClicked(false);
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };
  const handleOperator = (operator) => {
    if (!isOperatorClicked) {
      setDisplay(display + operator);
      setIsOperatorClicked(true);
    } else {
      const lastChar = display.slice(-1);
      if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        setDisplay(display.slice(0, -1) + operator);
      } else if (lastChar === ".") {
        setDisplay(display + "0" + operator);
      }
    }
  };

  const handleDelete = () => {
    if (display.length > 0) {
      const newDisplay = display.slice(0, -1);
      setDisplay(newDisplay);
    }
  };

  const handlePercentage = () => {
    try {
      const result = parseFloat(display) / 100;
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="display">
        {display}
      </div>
      <button id="clear" className="btn hero--ac btn-danger" onClick={handleClear}>
        clear
      </button>
      <button id="delete" className="btn btn-warning" onClick={handleDelete}>
          Delete
        </button>
      <div className="coloum">
        <button id="one" className="btn" onClick={() => handleClick("1")}>
          1
        </button>
        <button i="two" className="btn" onClick={() => handleClick("2")}>
          2
        </button>
        <button id="three" className="btn" onClick={() => handleClick("3")}>
          3
        </button>
        <button id="add" className="btn" onClick={() => handleClick("+")}>
          +
        </button>
      </div>
      <div className="coloum center">
        <button id="four" className="btn" onClick={() => handleClick("4")}>
          4
        </button>
        <button id="five" className="btn" onClick={() => handleClick("5")}>
          5
        </button>
        <button id="six" className="btn" onClick={() => handleClick("6")}>
          6
        </button>
        <button id="subtract" className="btn" onClick={() => handleClick("-")}>
          -
        </button>
      </div>
      <div className="coloum">
        <button id="seven" className="btn" onClick={() => handleClick("7")}>
          7
        </button>
        <button id="eight" className="btn" onClick={() => handleClick("8")}>
          8
        </button>
        <button id="nine" className="btn" onClick={() => handleClick("9")}>
          9
        </button>
        <button id="divide" className="btn" onClick={() => handleClick("/")}>
          /
        </button>
      </div>
      <div className="coloum">
        <button id="decimal" className="btn" onClick={handleDecimal}>
          .
        </button>
        <button id="zero" className="btn" onClick={() => handleClick("0")}>
          0
        </button>
        <button id="percentage" className="btn" onClick={handlePercentage}>
          %
        </button>
        <button id="equals" className="btn btn-success" onClick={handleEquals}>
          =
        </button>
        
      </div>
    </div>
  );
};

export default Calculator;
