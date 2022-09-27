import { useState } from "react";
function Counter() {
  const [number, setNumber] = useState(100);
  const handleClickMinus = (e) => {
    console.log("Click sur -");
    setNumber(number - 1);
    console.log(number);
  };
  const handleClickPlus = (e) => {
    console.log("Click sur +");
    setNumber(number + 1);
    console.log(number);
  };
  return (
    <>
      <button onClick={handleClickMinus}>-</button>
      <span>{number}</span>
      <button onClick={handleClickPlus}>+</button>
    </>
  );
}

export default Counter;
