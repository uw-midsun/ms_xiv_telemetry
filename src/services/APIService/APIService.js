import axios from "axios";
const API_URL = "";

class APIService{
    async get(URL){
        const fullURL = `${API_URL}/${URL}/`;
        return axios.get(fullURL).then(response => response.data);
    }
}

export default APIService;