import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../store/todos/todosSlice';
import {IoMdAdd} from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoForm = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const onChange = useCallback((event) => {
        setValue(event.target.value)
    }, [])

    const onSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            title: value,
            id: Date.now(),
            isCompleted: false
        }

        dispatch(addTodo(newTodo))
        setValue('')
    }   

    const showToast = useCallback(() => {
            toast.success('Todo created',  {
                position: toast.POSITION.TOP_RIGHT
            })
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <div className='box'>
            <input 
            value={value}
            onChange={onChange}
            type='text'
            placeholder='enter tasks name'
            />
            <button
            onClick={showToast}
            type={"submit"}
            >
                <IoMdAdd/>
            </button>
            <ToastContainer />
            </div>
          
        </form>
    );
};

export default TodoForm;