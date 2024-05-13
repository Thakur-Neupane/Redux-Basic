import React from "react";
const decrease = () => {
  setCount(count - 1);
};
const Minusbutton = () => {
  return <button onClick={decrease}>-</button>;
};

export default Minusbutton;
