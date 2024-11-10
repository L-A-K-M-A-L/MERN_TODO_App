import { useState } from 'react';
import userService from '../services/userService';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await userService.createUser({ name, email, password });
    };

    return (
        <>
            <div className="flex flex-col bg-gray-200 mt-10 rounded shadow-lg shadow-slate-800">
                <h1 className='text-center mt-2 text-2xl text-white bg-blue-500 rounded mx-2'>User Registration</h1>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 m-5">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="p-2 border rounded"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="p-2 border rounded"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                        className="p-2 border rounded"
                    />
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                        Add User
                    </button>
                </form>
            </div>
        </>


    );
};

export default UserForm;
