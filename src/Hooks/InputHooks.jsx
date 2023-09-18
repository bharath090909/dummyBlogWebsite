import React from "react";
import { useState } from "react";

const useInputHook = ({ name, type, msg, validateValue }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateValue(enteredValue);
  const hasError = !inputIsValid && isTouched;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputTouchHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  const inputInvalidClasses = hasError
    ? "border-1 border-[#b40e0e] bg-[#fddddd] focus:border-[#ff8800] focus:bg-[#fbe8d2]"
    : "";

  const jsx = (
    <div className="flex flex-col px-6 py-3">
      <label htmlFor={type}>{name.toUpperCase()}</label>
      <input
        className={`h-8 rounded-xl border-2 border-black p-2 ${inputInvalidClasses}`}
        type={type}
        id={name}
        name={name}
        onChange={inputChangeHandler}
        onBlur={inputTouchHandler}
        value={enteredValue}
      />
      {hasError && <p className="text-red-600">{msg}</p>}
    </div>
  );

  const input = {
    reset,
    jsx,
    hasError,
    inputIsValid,
    enteredValue,
  };

  return input;
};

export default useInputHook;
