import * as React from 'react';
import * as ReactDOM from 'react-dom';

const app = () => {
    return (
        <div>
            <div><h1>To-Do List</h1></div>{new Array(itemCount).fill('').map(() => <div><p contentEditable="true">Click me to edit.</p></div>)}
            <button>+ Add an Item</button>
        </div>
    );
}