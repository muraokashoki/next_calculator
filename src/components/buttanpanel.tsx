import React from "react";

export default function ButtonPanel(props: {
  calculatorBtn: (code: string) => void;
}) {
  return (
    <div>
      <div>
        <button
          onClick={() => props.calculatorBtn("7")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          7
        </button>
        <button
          onClick={() => props.calculatorBtn("8")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          8
        </button>
        <button
          onClick={() => props.calculatorBtn("9")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          9
        </button>
        <button
          onClick={() => props.calculatorBtn("+")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => props.calculatorBtn("4")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          4
        </button>
        <button
          onClick={() => props.calculatorBtn("5")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          5
        </button>
        <button
          onClick={() => props.calculatorBtn("6")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          6
        </button>
        <button
          onClick={() => props.calculatorBtn("-")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => props.calculatorBtn("1")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          1
        </button>
        <button
          onClick={() => props.calculatorBtn("2")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          2
        </button>
        <button
          onClick={() => props.calculatorBtn("3")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          3
        </button>
        <button
          onClick={() => props.calculatorBtn("*")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          ×
        </button>
      </div>
      <div>
        <button
          onClick={() => props.calculatorBtn("0")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          0
        </button>
        <button
          onClick={() => props.calculatorBtn("=")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          =
        </button>
        <button
          onClick={() => props.calculatorBtn("/")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          ÷
        </button>
        <button
          onClick={() => props.calculatorBtn(".")}
          className="m-2 bg-gray-500 w-6 md:w-12 h-6 md:h-12"
        >
          .
        </button>
      </div>
      <div className="m-2">
        <button
          onClick={() => props.calculatorBtn("C")}
          className="bg-gray-500 w-full h-6 md:h-12"
        >
          C
        </button>
      </div>
    </div>
  );
}
