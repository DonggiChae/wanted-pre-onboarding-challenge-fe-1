import axios from 'axios'
import { StringLiteral } from 'typescript';

const BASE_URL = 'http://127.0.0.1:8080/users'

export interface IAuthInPut {
  email: string;
  password: string;
}
export interface IAuthResponse {
  data: {
    message: string;
    token: string;
  }
}


export const signInResponse = async (email: string, password: string): Promise<IAuthResponse> => {
  return await axios.post(`${BASE_URL}/login`, {email, password} )
}


export const signUpResponse = async (email: string, password: string): Promise<IAuthResponse> => {
  return await axios.post(`${BASE_URL}/create`, { email, password })
}