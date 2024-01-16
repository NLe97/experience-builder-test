import ListGroup from "./components/ListGroup";
import { Image } from "./components/Image";
import { SubHeading } from "./components/SubHeading";
import React, { useEffect, useRef } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <SubHeading text="YourHeading" variant="dark" />
      <Image imageUrl="https://picsum.photos/500" />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
