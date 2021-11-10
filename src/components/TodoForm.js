import React, { useState, useEffect, useRef } from 'react';

// App's form for user input
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault(); // Stop refreshing

    // Generates colors for task items
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
          {props.edit ? (
            <>
              <input // Edit button
                placeholder='Update your item'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
                className='todo-input edit'
              />
              <button onClick={handleSubmit} className='todo-button edit'>
                Update
              </button>
            </>
          ) : (
            <>
              <input // Add task 
                placeholder='Add task'
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
              />
              <button onClick={handleSubmit} className='todo-button'>
                Add task
              </button>
            </>
          )}
        </form>
      );
    }
    
    export default TodoForm;