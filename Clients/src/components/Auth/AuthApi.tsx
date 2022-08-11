import axios from 'axios'

export interface AuthResponse {
  message: string;
  token: string;
}


export const logIn = async (email: string, password: string) => {
    const response = await axios.post('http://127.0.0.1:8080/users/login', { email, password })
    return response.data
}

export const signUp = async (email: string, password: string) => {
    const response = await axios.post('http://127.0.0.1:8080/users/create', { email, password })
    return response.data
}