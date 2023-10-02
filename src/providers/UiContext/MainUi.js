const { createContext, useState } = require("react");

export const UiContext = createContext({
  left: null,
  right: null,
  center: null,
  rightDispaly: null,
  setRight: () => {},
  setLeft: () => {},
  setRightDisplay: () => {},
});

export const UiProvider = ({ children }) => {
  const setRight = (noRightBar) => {
    if (noRightBar) {
      setState({
        ...state,
        center: "7",
        left: "4",
        right: "0",
      });
      return;
    } else {
      setState({
        ...state,
        center: "5",
        left: "3",
        right: "3",
      });
      return;
    }
  };

  const setLeft = (noLeft) => {
    if (noLeft) {
      setState({
        ...state,
        center: "8",
        left: "3",
        right: "0",
      });
      return;
    } else {
      setState({
        ...state,
        center: "7",
        left: "4",
        right: "0",
      });
      return;
    }
  };

  const setRightDisplay = (display) => {
    if (display === "none") {
      setState({
        ...state,
        rightDispaly: display,
        left: "4",
        center: "7",
        right: "0",
      });
    } else if (display === "block") {
      setState({
        ...state,
        rightDispaly: display,
        left: "3",
        right: "3",
        center: "5",
      });
    }
  };
  const InitUiState = {
    left: null,
    right: null,
    center: null,
    rightDispaly: null,
    setRight: setRight,
    setLeft: setLeft,
    setRightDisplay: setRightDisplay,
  };
  const [state, setState] = useState(InitUiState);
  return <UiContext.Provider value={state}>{children}</UiContext.Provider>;
};
