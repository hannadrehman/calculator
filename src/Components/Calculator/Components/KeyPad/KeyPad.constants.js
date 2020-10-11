export const ACTIONS = Object.freeze({
  CLEAR: "clear",
  ADD: "plus",
  MINUS: "minus",
  EQUAL: "equal",
  NUMBER: "number",
});

export const KEYS = Object.freeze([
  {
    id: 0,
    label: "C",
    action: ACTIONS.CLEAR,
    color: "#fcdada",
  },
  {
    id: 1,
    label: "+/-",
    action: ACTIONS.CHANGE_SIGN,
    color: "#fcdada",
  },
  {
    id: 2,
    label: "%",
    action: ACTIONS.CHANGE_SIGN,
    color: "#fcdada",
  },
  {
    id: 6,
    label: "/",
    color: "#fcdada",
  },
  {
    id: 7,
    label: "7",
    action: ACTIONS.NUMBER,
    color: "#fbebe7",
  },
  {
    id: 8,
    label: "8",
    action: ACTIONS.NUMBER,
    color: "#fbebe7",
  },
  {
    id: 9,
    label: "9",
    action: ACTIONS.NUMBER,
    color: "#fbebe7",
  },
  {
    id: 10,
    label: "*",
    color: "#ffa5a5",
  },
  {
    id: 11,
    label: "4",
    action: ACTIONS.NUMBER,
    color: "#fbebe7",
  },
  {
    id: 12,
    label: "5",
    action: ACTIONS.NUMBER,
    color: "#fbebe7",
  },
  {
    id: 13,
    label: "6",
    action: ACTIONS.NUMBER,
    color: "#fbebe7",
  },
  {
    id: 14,
    label: "-",
    action: ACTIONS.MINUS,
    color: "#ffa5a5",
  },
  {
    id: 15,
    label: "1",
    action: ACTIONS.NUMBER,
    color: "#fbebe7",
  },
  {
    id: 16,
    label: "2",
    action: ACTIONS.NUMBER,
    color: "#fbebe7",
  },
  {
    id: 17,
    label: "3",
    action: ACTIONS.NUMBER,
    color: "#fbebe7",
  },
  {
    id: 18,
    label: "+",
    action: ACTIONS.ADD,
    color: "#ffa5a5",
  },
  {
    id: 19,
    label: "0",
    action: ACTIONS.NUMBER,
    color: "#fbebe7",
  },
  {
    id: 20,
    label: "=",
    action: ACTIONS.EQUAL,
    color: "#ffa5a5",
  },
]);
