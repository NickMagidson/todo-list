import React, { Component } from 'react';
import TodoForm from './components/TodoForm';

export class App extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className='todo-app'>
                <TodoForm />
            </div>
        )
    }
}

export default App
