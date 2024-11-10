import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const createUser = async (user) => {
    return await axios.post(API_URL, user);
};

export default { createUser };
