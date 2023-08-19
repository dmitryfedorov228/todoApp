import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
    return (
        <div className='Container'>
            <TodoForm />
            <TodoList />
        </div>
    );
};

export default Todos;