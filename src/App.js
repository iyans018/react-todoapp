import React, { Fragment, useState } from 'react';
import Form from './Components/Form/Form';
import Items from './Components/Items/Items';
import ButtonClear from './Components/ButtonClear/ButtonClear';

import './App.css';

const App = () => {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e, inputText) => {
        e.preventDefault();
        if (text) {            
            setTodoList([...todoList, {id:Date.now(), todoText:inputText, status:'pending'}]);
        } else {
            alert('Tidak dapat menambahkan list!');
        }
        setText("");
    };

    const handleComplete = (id) => {
        setTodoList((oldList) => {
            let newList = oldList.map((list) => list.id === id ? { ...list, status: 'completed' } : list);
            return newList;
        })
    };

    const handleRemove = (id) => {
        setTodoList((oldList) => {
            let newList = oldList.filter((list) => list.id !== id);
            return newList;
        });
    };

    const handleClear = () => {
        setTodoList([]);
    };

    return (
        <Fragment>
            <h2 className="title">ToDo App by Oktavian Aji Tyas Azis</h2>
            <div className="container">
                <Form value={text} change={handleChange} submit={(e) => handleSubmit(e, text)} />
                <Items items={todoList} complete={handleComplete} remove={handleRemove}  />
                <ButtonClear click={handleClear} />
            </div>
        </Fragment>
    )
}

export default App
