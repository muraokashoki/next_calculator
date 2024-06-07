import React from "react";
import Display from "./display";
import Buttanpanel from "./buttanpanel";
import { useState } from "react";
import { calculate, State } from "../scripts/calculate";
export default function calculator() {
  const [state, setState] = useState({
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  });
  const calculatorBtn = (code: string) => {
    const nextState = calculate(state);
    setState(nextState);
  };
  return (
    <>
      <div>
        <Display />
        <Buttanpanel calculatorBtn={calculatorBtn} />
      </div>
    </>
  );
}
