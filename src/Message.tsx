import React from 'react';
import ListGroup from './components/ListGroup';

const Message = () => {
    const name = 'Limpa';
    if (name) {
        return (
            <div>
                <h1>Hello, I am {name}</h1>
                <h1>This is my first react project</h1>
                <ListGroup></ListGroup>
            </div>
        );
    }
    return <h1>Hello world</h1>
    
};

export default Message;