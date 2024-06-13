import React, { useState, useEffect } from "react";

export default function ButtonPanel(props: {
  calculatorBtn: (code: string) => void;
  selectedOperator: string | null;
}) {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  useEffect(() => {
    if (clickedButton !== null) {
      const timer = setTimeout(() => {
        setClickedButton(null);
      }, 200); // 200ミリ秒後に背景色を元に戻す

      return () => clearTimeout(timer);
    }
  }, [clickedButton]);

  const handleClick = (code: string) => {
    setClickedButton(code);
    props.calculatorBtn(code);
  };

  const getButtonClass = (operator: string) => {
    if (props.selectedOperator === operator) {
      return "m-2 bg-yellow-500 w-6 md:w-12 h-6 md:h-12";
    } else if (clickedButton === operator) {
      return "m-2 bg-green-500 w-6 md:w-12 h-6 md:h-12"; // クリック時の色
    } else {
      return "m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12";
    }
  };

  const getNumberButtonClass = (number: string) => {
    if (number === "C" && clickedButton === "C") {
      return "bg-yellow-500 w-full h-12"; // "C"ボタンがクリックされたときのスタイル
    } else if (clickedButton === number) {
      return "m-2 bg-yellow-500 w-6 md:w-12 h-6 md:h-12"; // 他のボタンがクリックされたときのスタイル
    } else if (number === "C") {
      return "bg-gray-500 w-full h-12"; // "C"ボタンの通常スタイル
    } else {
      return "m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"; // 他のボタンの通常スタイル
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleClick("7")}
          className={getNumberButtonClass("7")}
        >
          7
        </button>
        <button
          onClick={() => handleClick("8")}
          className={getNumberButtonClass("8")}
        >
          8
        </button>
        <button
          onClick={() => handleClick("9")}
          className={getNumberButtonClass("9")}
        >
          9
        </button>
        <button
          onClick={() => handleClick("+")}
          className={getButtonClass("+")}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => handleClick("4")}
          className={getNumberButtonClass("4")}
        >
          4
        </button>
        <button
          onClick={() => handleClick("5")}
          className={getNumberButtonClass("5")}
        >
          5
        </button>
        <button
          onClick={() => handleClick("6")}
          className={getNumberButtonClass("6")}
        >
          6
        </button>
        <button
          onClick={() => handleClick("-")}
          className={getButtonClass("-")}
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => handleClick("1")}
          className={getNumberButtonClass("1")}
        >
          1
        </button>
        <button
          onClick={() => handleClick("2")}
          className={getNumberButtonClass("2")}
        >
          2
        </button>
        <button
          onClick={() => handleClick("3")}
          className={getNumberButtonClass("3")}
        >
          3
        </button>
        <button
          onClick={() => handleClick("*")}
          className={getButtonClass("*")}
        >
          ×
        </button>
      </div>
      <div>
        <button
          onClick={() => handleClick("0")}
          className={getNumberButtonClass("0")}
        >
          0
        </button>
        <button
          onClick={() => handleClick("=")}
          className={getNumberButtonClass("=")}
        >
          =
        </button>
        <button
          onClick={() => handleClick("/")}
          className={getButtonClass("/")}
        >
          ÷
        </button>
        <button
          onClick={() => handleClick(".")}
          className={getNumberButtonClass(".")}
        >
          .
        </button>
      </div>
      <div className="m-2">
        <button
          onClick={() => handleClick("C")}
          className={getNumberButtonClass("C")}
        >
          C
        </button>
      </div>
    </div>
  );
}
