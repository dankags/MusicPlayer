const { createContext, useState, useContext } = require("react");

 export const UiContext = createContext({
  left: null,
  right: null,
  center: null,
  rightDispaly: false,
  setRight: () => {},
  setLeft: () => {},
  setRightDisplay: () => {},
});

export const UiProvider = ({ children }) => {
  const setRight = (noRightBar) => {
    if (noRightBar) {
      setState({
        ...state,
        center: "col-end-12 col-span-8",
        left: "col-end-4 col-span-3",
        right: "",
      });
      return;
    } else {
      setState({
        ...state,
        center: "col-end-9 col-span-5",
        left: "col-end-4 col-span-3",
        right: "col-end-12 col-span-3",
      });
      return;
    }
  };

  const setLeft = (noLeft) => {
    if (noLeft) {
      setState({
        ...state,
        center: "col-end-9 col-span-5",
        left: "col-end-4 col-span-3",
        right: "col-end-12 col-span-3",
      });
      return;
    } else {
      setState({
        ...state,
        center: "col-end-12 col-span-7",
        left: "col-end-5 col-span-4",
        right: "",
      });
      return;
    }
  };

  const setRightDisplay = (display) => {
    if (display === "none") {
      setState({
        ...state,
        rightDispaly: false,
        left: "col-end-4 col-span-3",
        center: "col-end-12 col-span-8",
        right: "",
      });
    } else if (display === "block") {
      setState({
        ...state,
        rightDispaly: true,
        left: "col-end-4 col-span-3",
        right: "col-end-12 col-span-3",
        center: "col-end-9 col-span-5",
      });
    }
  };
  const InitUiState = {
    left: null,
    right: null,
    center: null,
    rightDispaly: false,
    setRight: setRight,
    setLeft: setLeft,
    setRightDisplay: setRightDisplay,
  };
  const [state, setState] = useState(InitUiState);
  return <UiContext.Provider value={state}>{children}</UiContext.Provider>;
};

export function useUiContext() {
  // if (UiContext) {
  //    throw new Error("the context is null")
  // }
  return useContext(UiContext)
} 