import React, { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  //   let items = ["New York", "San Francisco", "Tokyo", "London", "Japan"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];
  //   event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <div>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
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
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
