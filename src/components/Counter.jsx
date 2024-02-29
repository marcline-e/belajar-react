import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  function handleClick() {
    setCount((prevState) => prevState + 1);
  }

  function clickMinus() {
    setCount(count-4);
  }
  return (
    <>
      {" "}
      <h1 className="text-5xl font-bold">Aku udah nangis {count} kali</h1>
      <div className="mt-5 flex item-center gap-2">
        <Button onClick={handleClick}>+1</Button>
        <Button
          onClick={() => {
            handleClick();
            handleClick();
            handleClick();
          }}
        >
          +3
        </Button>
        <Button onClick={clickMinus}>-4</Button>
      </div>
    </>
  );
}
