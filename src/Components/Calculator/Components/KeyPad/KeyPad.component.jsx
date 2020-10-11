import React from "react";
import { KEYS } from "./KeyPad.constants";
import { Key, Wrapper } from "./Keypad.styled";

function KeyPad({ onKeyPressed }) {
  return (
    <Wrapper>
      {KEYS.map((key) => (
        <Key color={key.color} key={key.id} onClick={() => onKeyPressed(key)}>
          {key.label}
        </Key>
      ))}
    </Wrapper>
  );
}

export default KeyPad;
