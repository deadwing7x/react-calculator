import React from "react";
import "../styles/Numbers.css";
import { INumbersProps } from "../models/INumbersProps";

const Numbers: React.FC<INumbersProps> = (props: INumbersProps) => {
  const handleNumberClick = (num: number) => {
    props.handleClick(num);
  };

  return (
    <div className="number-row">
      <input
        type="button"
        className="number-button"
        value={props.displayNumber}
        onClick={() => handleNumberClick(props.displayNumber)}
      />
    </div>
  );
};

export default Numbers;
