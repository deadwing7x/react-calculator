import React, { useState, useRef } from "react";
import Numbers from "./Numbers";
import Operator from "./Operator";
import "../styles/Calculator.css";
import { INumbersProps } from "../models/INumbersProps";
import { IOperatorProps } from "../models/IOperatorProps";
import logo from "../logo.svg";

const Calculator: React.FC<{}> = () => {
  const [output, setOutput] = useState<string>("");
  const outputRef = useRef<HTMLInputElement>(null);
  
  const secondRowNumbersList: number[] = [7, 8, 9];
  const thirdRowNumbersList: number[] = [4, 5, 6];
  const fourthRowNumbersList: number[] = [1, 2, 3];
  const secondRowOperator: IOperatorProps = {
    displayOperator: "*",
    handleClick: (operator: string) => {
      onChildClick(operator);
    },
  };
  const thirdRowOperator: IOperatorProps = {
    displayOperator: "/",
    handleClick: (operator: string) => {
      onChildClick(operator);
    },
  };
  const fourthRowOperator: IOperatorProps = {
    displayOperator: "+",
    handleClick: (operator: string) => {
      onChildClick(operator);
    },
  };

  const lastRowButtonClick = (item: string) => {
    setOutput(`${output}${item}`);
  };

  const onChildClick = (item: string) => {
    setOutput(`${output}${item}`);
  };

  const showResult = () => {
    try {
      outputRef?.current?.focus();
      // eslint-disable-next-line no-eval
      const result = eval(output);
      setOutput(result);
    } catch (error: any) {
      setOutput("Invalid Expression!");
    }
  };

  const clearOutput = () => {
    setOutput("");
  };

  return (
    <div>
      <h1>Calculator made using React and TypeScript using React Hooks</h1>
      <h2>Anubhav Sarkar</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="calculator-body">
        <div className="result-screen">
          <input
            type="text"
            ref={outputRef}
            className="result-input"
            placeholder="0"
            value={output}
            readOnly
          />
        </div>
        <div>
          <div className="first-row">
            <div id="reset-result">
              <button type="button" id="reset-button" onClick={clearOutput}>
                C
              </button>
            </div>
            <div id="equals">
              <button
                type="button"
                className="operator-equals"
                onClick={showResult}
              >
                =
              </button>
            </div>
          </div>
          <div className="second-row">
            {secondRowNumbersList.map((item: number, i: number) => {
              const num: INumbersProps = {
                displayNumber: item,
                handleClick: (num: any) => {
                  onChildClick(num.toString());
                },
              };
              return <Numbers {...num} key={i} />;
            })}
            <Operator {...secondRowOperator} />
          </div>
          <div className="third-row">
            {thirdRowNumbersList.map((item: number, i: number) => {
              const num: INumbersProps = {
                displayNumber: item,
                handleClick: (num: number) => {
                  onChildClick(num.toString());
                },
              };
              return <Numbers {...num} key={i} />;
            })}
            <Operator {...thirdRowOperator} />
          </div>
          <div className="fourth-row">
            {fourthRowNumbersList.map((item: number, i: number) => {
              const num: INumbersProps = {
                displayNumber: item,
                handleClick: (num: any) => {
                  onChildClick(num.toString());
                },
              };
              return <Numbers {...num} key={i} />;
            })}
            <Operator {...fourthRowOperator} />
          </div>
          <div className="fifth-row">
            <div className="number-lastrow">
              <input
                type="button"
                className="number-lastbutton"
                value="0"
                onClick={() => lastRowButtonClick("0")}
              />
            </div>
            <div className="operator-lastrow">
              <input
                type="button"
                className="operator-lastbutton"
                value="-"
                onClick={() => lastRowButtonClick("-")}
              />
            </div>
            <div className="operator-lastrow">
              <input
                type="button"
                className="modulus-button"
                value="%"
                onClick={() => lastRowButtonClick("%")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
