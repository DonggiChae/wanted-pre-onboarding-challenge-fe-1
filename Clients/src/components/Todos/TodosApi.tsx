import axios, {AxiosRequestConfig} from 'axios'

export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type TodoInput = Pick<Todo, "title" | "content">;

export interface ResponseDatas {
  data: Todo[]
}

export interface ResponseData {
  data: Todo
}

export const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://127.0.0.1:8080/todos',
};

const client = axios.create(axiosConfig);

client.defaults.headers.common.Authorization = localStorage.getItem('token') || ''

export const getTodos = async () => {

    const response = await client.get('')
    return response.data
}

export const getTodoById = async (id: string) => {
    const response = await client.get(`/${id}`)
    return response.data
}


export const createTodo = async (title: string, content: string) => {
    const response = await client.post('/', { title, content })
    return response.data
}

export const updateTodo = async (id: string, title: string, content: string) => {

    const response = await client.put(`/${id}`, { title, content })
    return response.data
}

export const deleteTodo = async (id: string) => {
    const response = await client.delete(`/${id}`)
    return response.data
}