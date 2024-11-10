import React, { useState, useEffect } from 'react';
import List01 from './components/List01';
import axios from "axios";
import { baseURL } from './utils/constant';

const App = () => {

    const [userInput, setUserInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [updateUI, setUpdateUI] = useState(false);

    useEffect(() => {
        axios.get(`${baseURL}/get`)
            .then((res) => {
                console.log(res.data);
                setTasks(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [updateUI]);

    const addTask = () => {
        axios.post(`${baseURL}/save`, { task: userInput })
            .then((res) => {
                console.log(res.data);
                setTasks((prevTasks) => [...prevTasks, res.data]); 
                setUserInput(""); 
            }).catch((err) => {
                console.log(err);
            });
    };

    const deleteTask = (id) => {
        axios.delete(`${baseURL}/delete/${id}`)
            .then(() => {
                setTasks(tasks.filter((task) => task._id !== id)); 
                setUpdateUI(!updateUI); 
            }).catch((err) => {
                console.log(err);
            });
    };

    const editTask = (id, updatedTask) => {
        axios.put(`${baseURL}/update/${id}`, { task: updatedTask })
            .then((res) => {
                setTasks(tasks.map((task) => task._id === id ? { ...task, task: updatedTask } : task)); // Update task in UI
                setUpdateUI(!updateUI); 
            }).catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <main className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">MongoDB CRUD Operation</h1>

                <div className="flex space-x-4 mb-8">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Enter a task"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                        onClick={addTask}
                    >
                        Add Task
                    </button>
                </div>

                <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
                    {tasks.map((task) => (
                        <List01
                            key={task._id}
                            id={task._id}
                            task={task.task}
                            setUpdateUI={setUpdateUI}
                            editTask={editTask}
                            deleteTask={deleteTask}
                        />
                    ))}
                </ul>
            </main>
        </>
    )
}

export default App;
