import React, { useState } from 'react';
import Message from './Message';
import ListGroup from './components/ListGroup';
// import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <Message></Message> */}
      {/* <ListGroup></ListGroup> */}
      {/* <Alert children = "Hello World"></Alert> */}
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color= "primary" onClick = {() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
};

export default App;