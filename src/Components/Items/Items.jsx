import React from 'react';

const Items = (props) => {
    return (
        <>
            {props.items.map((item) => {
                const { id, todoText, status } = item;
                return (
                    <div key={id} className="todo-item">
                        <p className={`todo-text ${status === 'completed' ? "completed" : ""}`}>{todoText}</p>
                        <div>
                            <button className="btn-done" onClick={() => props.complete(id)}>Done</button>
                            <button className="btn-remove" onClick={() => props.remove(id)}>Remove</button>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Items;
