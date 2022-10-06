import axios from 'axios';

const getAll = async (baseUrl) => {
    return await axios.get(baseUrl);
};

export default {getAll}