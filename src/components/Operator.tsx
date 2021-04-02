import React from "react";
import "../styles/Operator.css";
import { IOperatorProps } from "../models/IOperatorProps";

const Numbers: React.FC<IOperatorProps> = (props: IOperatorProps) => {
  const handleOperatorClick = (operator: string) => {
    props.handleClick(operator);
  };

  return (
    <div className="operator-row">
      <input
        type="button"
        className="operator-button"
        value={props.displayOperator}
        onClick={() => handleOperatorClick(props.displayOperator)}
      />
    </div>
  );
};

export default Numbers;
