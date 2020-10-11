import React from "react";
import { Wrapper } from "./Calculator.styled";
import { Display, KeyPad } from "./Components";
import { ACTIONS } from "./Components/KeyPad/KeyPad.constants";

function Calculator() {
  const [displayValue, setDisplayValue] = React.useState("");
  const lastValue = React.useRef("");
  const lastAction = React.useRef("");
	const [list, setList] = React.useState([]);
	
	const upperValue = list.join(' ')
	console.log(upperValue)
  function handleKeyPress(key) {
    switch (key.action) {
      case ACTIONS.ADD: {
        setList((prevState) => [...prevState, lastValue.current, "+"]);
        setTimeout(() => {
          lastValue.current = "";
        }, 100);
        lastAction.current = "+";
        break;
      }
      case ACTIONS.MINUS: {
        console.log(lastValue.current);
        setList((prevState) => [...prevState, lastValue.current, "-"]);
        setTimeout(() => {
          lastValue.current = "";
        }, 100);
        lastAction.current = "-";
        break;
      }
      case ACTIONS.EQUAL: {
        setList((prevState) => {
          const tempList = [...prevState, lastValue.current];
          const unsafeString = tempList.join("");
          // both setState and evals are dangerous. doing so because it eases the pain in this case
          setDisplayValue(eval(unsafeString));
          return tempList;
        });

        setTimeout(() => {
          lastValue.current = "";
          lastAction.current = "";
        }, 100);
        break;
      }
      case ACTIONS.NUMBER: {
        let lbl = lastValue.current;
        lbl += key.label;
        setDisplayValue(lbl);
        lastValue.current = lbl;
        break;
      }
      case ACTIONS.CLEAR: {
        setDisplayValue("");
        lastValue.current = "";
        lastAction.current = "";
        setList([]);
        break;
      }
      default:
        break;
    }
  }
  return (
    <Wrapper>
      <Display
        value={displayValue}
        upperValue={upperValue || '   '}
      />
      <KeyPad onKeyPressed={handleKeyPress} />
    </Wrapper>
  );
}

export default Calculator;
