export interface State {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
  selectedOperator: string | null;
}

// 初期のstateオブジェクト例
const initialState: State = {
  current: "",
  operand: 0,
  operator: null,
  isNextClear: false,
  selectedOperator: null, // nullで初期化
};

export default function calculate(button: string, state: State): State {
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
    return {
      ...handleEqualButton(state),
      selectedOperator: null,
    };
  }
  return state;
}

function isNumber(button: string) {
  return "0123456789".includes(button);
}

function handleNumberButton(button: string, state: State): State {
  if (state.isNextClear) {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
      selectedOperator: state.selectedOperator,
    };
  }

  if (state.current === "0") {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
      selectedOperator: state.selectedOperator,
    };
  }

  return {
    current: state.current + button,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
    selectedOperator: state.selectedOperator,
  };
}

function isOperator(button: string) {
  return "+-*/".includes(button);
}

function handleOperatorButton(button: string, state: State): State {
  if (state.operator === null || state.isNextClear) {
    return {
      ...state,
      operand: parseFloat(state.current),
      operator: button,
      isNextClear: true,
      selectedOperator: button,
    };
  }
  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: nextValue,
    operator: button,
    isNextClear: true,
    selectedOperator: button,
  };
}

function isDot(button: string) {
  return button === ".";
}

function handleDotButton(state: State): State {
  if (state.current.includes(".")) {
    return state;
  }
  return {
    current: state.current + ".",
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
    selectedOperator: state.selectedOperator,
  };
}

function isClear(button: string) {
  return button === "C";
}

function handleClearButton(state: State): State {
  return {
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
    selectedOperator: null,
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
    selectedOperator: null,
  };
}

function operate(state: State): number {
  const current = parseFloat(state.current);

  switch (state.operator) {
    case "+":
      return state.operand + current;
    case "-":
      return state.operand - current;
    case "*":
      return state.operand * current;
    case "/":
      return state.operand / current;
    default:
      return current;
  }
}

function formatNumber(num: number): string {
  return parseFloat(num.toFixed(10)).toString();
}
