import axios from "axios";

/*
    // Rodar com IPV4: json-server --watch -d 180 --host 192.168.0.19 db.json
    // substituir pelo seu IP, para descobrir abra um cmd e digite "ipconfig"
*/

const api = axios.create({
    baseURL: 'http://192.168.0.19:3000'
})

export default api;