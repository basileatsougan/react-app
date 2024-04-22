//import { MouseEvent } from "react";
//
//

import { useState } from "react";

function ListGroup() {
  let items = ["Spain", "Madrid", "Las Vegas", "New York", "Paris", "London"];

  //
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
