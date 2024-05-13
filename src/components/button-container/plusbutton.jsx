import React from "react";
import { increase } from "../../counterSlice";
import { useDispatch } from "react-redux";

const Plusbutton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increase())}>+</button>;
};

export default Plusbutton;
