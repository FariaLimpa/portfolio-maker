import React from 'react';
import Message from './Message';
import ListGroup from './components/ListGroup';

const App = () => {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Japan"];
  const handleSelectItem = (item: string)=> {
    console.log(item);
  };

  return (
    <div>
      {/* <Message></Message> */}
      <ListGroup items = {items} heading = "Cities" onSelectItem = {handleSelectItem}></ListGroup>
    </div>
  );
};

export default App;