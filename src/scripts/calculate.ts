export default function calculate(button: string, state: State) {
  // ボタンの判別
  if (isNumber(button)) {
    return handleNumberButton(button, state);
  }
  if (isOperator(button)) {
    return handleOperatorButton(button, state);
  }
  if (isDot(button)) {
    return handleDotButton(state);
  }
  if (isClear(button)) {
    return handleClearButton(state);
  }
  if (isEqual(button)) {
    return handleEqualButton(state);
  }
  return state;
}

export interface State {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
}

function isNumber(button: string) {
  return "0123456789".includes(button);
}

function handleNumberButton(button: string, state: State) {
  if (state.isNextClear) {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }

  if (state.current === "0") {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }

  return {
    current: state.current + button,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
}

function isOperator(button: string) {
  return "+-*/".includes(button);
}

function handleOperatorButton(button: string, state: State) {
  if (state.operator === null) {
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: button,
      isNextClear: true,
    };
  }

  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: nextValue,
    operator: button,
    isNextClear: true,
  };
}

function isDot(button: string) {
  return button === ".";
}

function handleDotButton(state: State) {
  if (state.current.includes(".")) {
    return state;
  }
  return {
    current: state.current + ".",
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
}

function isClear(button: string) {
  return button === "C";
}

function handleClearButton(state: State) {
  return {
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  };
}

function isEqual(button: string) {
  return button === "=";
}

function handleEqualButton(state: State): State {
  if (state.operator === null) {
    return state;
  }

  const nextValue = operate(state);
  return {
    current: formatNumber(nextValue),
    operand: nextValue,
    operator: null,
    isNextClear: true,
  };
}

function operate(state: State): number {
  const current = parseFloat(state.current);

  if (state.operator === "+") {
    return state.operand + current;
  }
  if (state.operator === "-") {
    return state.operand - current;
  }
  if (state.operator === "*") {
    return state.operand * current;
  }
  if (state.operator === "/") {
    return state.operand / current;
  }
  return current;
}

function formatNumber(num: number): string {
  return parseFloat(num.toFixed(10)).toString();
}
