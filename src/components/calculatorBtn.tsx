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
    selectedOperator: null,
  });

  const calculatorBtn = (code: string) => {
    const nextState = calculate(code, state);
    setState(nextState);
  };

  return (
    <>
      <div>
        <Display value={state.current} />
        <ButtonPanel
          calculatorBtn={calculatorBtn}
          selectedOperator={state.selectedOperator}
        />
      </div>
    </>
  );
}
