import React, { useState } from 'react';

const List01 = ({ id, task, setUpdateUI, editTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task);

    const handleEdit = () => {
        if (isEditing) {
            // If editing, update task
            editTask(id, newTask);
        }
        setIsEditing(!isEditing); // Toggle edit mode
    };

    const handleDelete = () => {
        deleteTask(id); // Delete task by id
    };

    return (
        <li className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
            {isEditing ? (
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                />
            ) : (
                <span className="text-gray-700">{task}</span>
            )}
            <div className="flex space-x-4">
                <button 
                    onClick={handleEdit} 
                    className="flex items-center space-x-1 text-blue-500 hover:text-blue-700"
                >
                    <span>🖊️</span>
                    <span>{isEditing ? 'Save' : 'Edit'}</span>
                </button>
                <button 
                    onClick={handleDelete} 
                    className="flex items-center space-x-1 text-red-500 hover:text-red-700"
                >
                    <span>🚮</span>
                    <span>Delete</span>
                </button>
            </div>
        </li>
    );
};

export default List01;
