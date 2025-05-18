import { useState } from "react";
import "./App.css";

import ParseJSON from "./component/ParseJSON";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParseJSON />
    </>
  );
}

export default App;
