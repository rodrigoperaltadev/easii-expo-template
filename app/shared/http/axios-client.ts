import axios from 'axios'

const TEN_SECONDS = 10000

export const axiosClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: TEN_SECONDS
})
