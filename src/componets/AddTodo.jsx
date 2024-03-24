import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <div className="  mt-8 mx-auto max-w-md">
            <form onSubmit={addTodoHandler} className="flex items-center">
                <input
                    type="text"
                    className="flex-grow bg-gray-200 border border-gray-400 rounded-l-md py-2 px-4 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base text-gray-800"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="ml-2 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-r-md"
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
