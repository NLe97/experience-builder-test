import ListGroup from "./components/ListGroup";
import { Image } from "./components/Image";
import { SubHeading } from "./components/SubHeading";
import React, { useEffect, useRef } from "react";
import Experience from "./components/Experience";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Experience />
    </div>
  );
}

export default App;
