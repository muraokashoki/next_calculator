import React, { useState } from "react";
import Display from "./display";
import ButtonPanel from "./buttanpanel";
import calculate from "../scripts/calculate";
import type { State } from "../scripts/calculate";

export default function Calculator() {
  // useStateでコンポーネント状態を管理し、setStateで状態を更新する
  const [state, setState] = useState<State>({
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
    selectedOperator: null,
  });

  // ボタンがクリックされたときにnextStateが計算され、setStateでnextStateに渡される
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
