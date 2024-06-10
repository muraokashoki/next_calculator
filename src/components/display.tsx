import React from "react";

interface DisplayProps {
  value: string;
}

export default function Display({ value }: DisplayProps) {
  return <div>{value}</div>;
}
