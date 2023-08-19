import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {MdDeleteForever} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'
import { deleteTodo } from '../../../store/todos/todosSlice';
import { ToastContainer, toast } from 'react-toastify';

const Todo = ({todo}) => {

    const dispatch = useDispatch()

    const [editingTitle, setEditedTitle] = useState(todo.title)

    const [isEditing, setIsEditing] = useState(false)

    const showDeleteToast = useCallback(() => {
        toast.warning('Todo deleted', {
            position: toast.POSITION.TOP_RIGHT
        })
    }, [])

    const handleDelete= useCallback(() => {
        dispatch(deleteTodo(todo.id))
    }, [dispatch, todo.id])
    return (
        <div className='liBox'>
            <li>
                
               { isEditing ?(
                <>
                <input 
                type='text'
                value={editingTitle}
                />
                <button>Save</button>
                <button>Cancel</button>
                </>
               ) : (
                <>
                <span>{todo.title}</span>
                <div className='boxButton'>
                <button
                onClick={handleDelete}
                onFocus={showDeleteToast}
                ><MdDeleteForever/></button>
              
                <button><AiFillEdit /></button>
                <ToastContainer />
                </div>
                
                </>
               )
            
            }
            </li>
        </div>
    );
};

export default Todo;