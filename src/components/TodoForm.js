import React, { useState, useEffect, useRef } from 'react';
import moment from "moment";


function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    // This is to auto focus in input field
    useEffect(() =>{
        inputRef.current.focus()
    })

    const date = Date.now()
    console.log(date)

    var myDate = Date.now();
    var tododate = moment(myDate).format("YYYY-MM-DD HH:mm:ss");

    const handleChange = e =>{
        setInput(e.target.value);
    }

    // This is to prevent refresh //
    const handleSubmit = e =>{
        e.preventDefault();
        

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            timestamp: tododate,
        });
        setInput(''); // This is to clean input field    
    }



    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                    <input 
                    placeholder="Update your item" 
                    value={input}
                    name="text" 
                    className="todo-input edit"
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    <button className="todo-button edit">
                        Update
                    </button>
                    
                    </>
                ) : (
                    <>
                    <input 
                    placeholder="Add a todo" 
                    value={input}
                    name="text" 
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    <button className="todo-button">
                        Add todo
                    </button>
                    </>
                )}
                
            </form>
            
        </div>
    )
}

export default TodoForm
