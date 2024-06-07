export default function calculate(bottun: string, state: State) {
  // どの状態の時、どのボタンを押すと次はどの状態になるのか管理
  // ボタンの判別
  // 数値
  if (isNumber(button)) {
  }
  // オペレーター
  if (isNumber(button)) {
  }
  // .
  if (isDot(button)) {
  }
  // 削除
  if (isClear(button)) {
  }
  // =
  if (isEqual(button)) {
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
  return (
    button === "0" ||
    button === "1" ||
    button === "2" ||
    button === "3" ||
    button === "4" ||
    button === "5" ||
    button === "6" ||
    button === "7" ||
    button === "8" ||
    button === "9"
  );
}
