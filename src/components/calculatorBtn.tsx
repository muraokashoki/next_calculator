import React, { useState } from "react";
import Display from "./display";
import ButtonPanel from "./buttanpanel"; // Fix typo: "buttanpanel" -> "buttonpanel"
import calculate from "../scripts/calculate"; // Fix import: remove curly braces
import type { State } from "../scripts/calculate"; // Stateの型宣言を追加

export default function Calculator() {
  const [state, setState] = useState<State>({
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  });

  const calculatorBtn = (code: string) => {
    const nextState = calculate(code, state);
    console.log("Next state:", nextState);
    setState(nextState);
  };

  return (
    <>
      <div>
        <Display value={state.current} />
        <ButtonPanel calculatorBtn={calculatorBtn} />
      </div>
    </>
  );
}
