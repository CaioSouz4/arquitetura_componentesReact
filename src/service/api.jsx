import axios from 'axios'

export const api = axios.create({ baseURL: 'https://randomuser.me/api' });
export const apiFlags = axios.create({ baseURL: 'https://restcountries.eu/rest/v2/name/'})



