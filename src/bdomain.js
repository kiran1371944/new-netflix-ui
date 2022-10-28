import axios from 'axios'

const bsUrl = axios.create(
    {baseURL: "https://api.themoviedb.org/3"}
);
export default bsUrl