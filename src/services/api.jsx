import axios from 'axios'

//https://viacep.com.br/ws/01310930/json/

 export const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/',

})