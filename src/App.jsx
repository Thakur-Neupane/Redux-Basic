import { useState } from "react";
import Display from "./components/display";

import "./App.css";
import Buttoncontainer from "./components/button-container/Buttoncontainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Redux Play ground </h1>
      <hr />

      <Display count={count} />
      <Buttoncontainer increase={increase} decrease={decrease} />
    </>
  );
}

export default App;
