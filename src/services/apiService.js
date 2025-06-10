import axios from "axios";

const apiService = axios.create({
    baseUrl: 'http://localhost:3400/'
});

export { apiService};