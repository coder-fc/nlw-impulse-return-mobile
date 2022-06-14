import axios from "axios";

export const api = axios.create({
    baseURL: 'https://nlw-impulse-return-server-production.up.railway.app/'
}) 