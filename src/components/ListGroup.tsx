import React from "react";

const ListGroup = () => {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Japan"]; 
//   items = []; 
  return (
    <div>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p> }
      <ul className="list-group">
        {items.map((item, index) => (
            <li className="list-group-item" key={item} onClick={() => console.log(item, index)} >{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
