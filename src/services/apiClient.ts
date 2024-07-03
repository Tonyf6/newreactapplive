import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'af5b356e6ca34de287162181b3a4c085'
    }
})