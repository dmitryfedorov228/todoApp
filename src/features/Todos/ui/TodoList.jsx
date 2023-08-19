import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoList } from '../../../store/todos/todosSelector';
import Todo from './Todo';

const TodoList = () => {

    const todoList = useSelector(selectTodoList)

    return (
        <ul>
             {todoList?.length ? todoList.map((todo) => (
                <Todo
                    todo={todo}
                    key={todo.id}
                />
            )) : (
                <p>No more tasks</p>
            )}
        </ul>
    );
};

export default TodoList;