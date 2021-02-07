import React from 'react';

const ButtonClear = (props) => {
    return (
        <>
            <button className="btn-clear" onClick={props.click}>Clear Items</button>
        </>
    )
}

export default ButtonClear;
