import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})
