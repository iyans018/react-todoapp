import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
            <div className="form-container">
                <input type="text" value={props.value} onChange={props.change} placeholder="What do you want to do!"/>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default Form;
